import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionsCellRendererComponent } from './actions-cell-renderer.component';
import { StockCellRendererComponent } from './stock-cell-renderer.component';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @ViewChild('addProductModal')
  addProductModal?: ElementRef<HTMLElement>;

  modal;
  
  productToAddOrEdit: Product;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openModal() {
    this.modal = this.modalService.open(this.addProductModal, {ariaLabelledBy: 'modal-basic-title'});
  }

  dismissModal() {
    this.modal.dismiss();
  }

  editProduct = (product: Product) => {
    this.productToAddOrEdit = new Product(product);
    this.openModal();
  }

  addProduct = () => {
    this.productToAddOrEdit = new Product({});
    this.openModal();
  }

  saveProduct = () => {
    if (this.productToAddOrEdit.id) {
      this.rowData[this.rowData.findIndex(r => r.id === this.productToAddOrEdit.id)] = this.productToAddOrEdit;
    } else {
      this.productToAddOrEdit.id = this.rowData.length + 1;
      this.rowData.push(this.productToAddOrEdit);
    }

    this.modal.close();
    this.gridApi.setRowData(this.rowData)
  }

  deleteProduct = (product: Product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      this.rowData.splice(this.rowData.findIndex(r => r.id === product.id), 1);
      this.gridApi.setRowData(this.rowData)
    }
  }

  columnDefs = [
    {
      field: 'name',
      headerName: 'Product Name',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      lockPosition: true,
    },
    {
      field: 'retailPrice',
      headerName: 'Retail Price',
      sortable: true,
      filter: true,
      lockPosition: true,
    },
    {
      field: 'barcode',
      headerName: 'Barcode',
      sortable: true,
      filter: true,
      lockPosition: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      sortable: true,
      filter: true,
      cellRendererFramework: StockCellRendererComponent,
      cellRendererParams: {
        dangerCount: 10,
        warningCount: 100
      },
      lockPosition: true,
    },
    {
      cellRendererFramework: ActionsCellRendererComponent,
      cellRendererParams: {
        onEditClicked: this.editProduct,
        onDeleteClicked: this.deleteProduct
      },
      width: 50,
      lockPosition: true,
    },
  ];

  rowData = [
    new Product({ id: 1, name: 'Lays American Onion', barcode: '0 705632 441947', retailPrice: 20, stock: 1321 }),
    new Product({ id: 2, name: 'Haldiram’s Bhujia Sev', barcode: '0 705632 412197', retailPrice: 35, stock: 80 }),
    new Product({ id: 3, name: 'Surf Excel Matic 1kg', barcode: '0 705632 441996', retailPrice: 250, stock: 0 }),
  ];

  onFirstDataRendered(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params) {
    params.api.sizeColumnsToFit();
  }

  onRowSelected(event) {
  }

  onSelectionChanged(event) {
    const selectedRows = event.api.getSelectedNodes();
  }
}

import { Component } from '@angular/core';

@Component({
    selector: 'cu-stock-cell-renderer',
    template: 
    `<div [class]="'stock-count ' + statusClass">
        {{params.value}}
    </div>`
})
export class StockCellRendererComponent {
    params: { value: number, dangerCount: number, warningCount: number };

    agInit(params): void {
        this.params = params;
    }

    get statusClass(): string {
        return this.params.value <= this.params.dangerCount ? 'text-danger' : this.params.value <= this.params.warningCount ? 'text-warning' : 'text-success';
    }
}
import { Component } from '@angular/core';

@Component({
    selector: 'cu-stock-cell-renderer',
    template: 
    `<div>
        <span class="icon-edit cursor-pointer mr-3" placement="top" (click)="this.params?.onEditClicked(this.params.data)"></span>
        <span class="icon-delete cursor-pointer" style="font-size: 17px" (click)="this.params?.onDeleteClicked(this.params.data)"></span>
    </div>`
})
export class ActionsCellRendererComponent {
    params: any;

    agInit(params): void {
        this.params = params;
        console.log(params);
    }
}

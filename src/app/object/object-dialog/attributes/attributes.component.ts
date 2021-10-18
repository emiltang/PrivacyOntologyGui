import { Component, Input, OnInit } from '@angular/core';
import { IAttribute } from '../../../core/model';
import { MatDialog } from '@angular/material/dialog';
import { AttributesDialogComponent } from './attributes-dialog/attributes-dialog.component';

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

    @Input() attributes: IAttribute<any>[];

    constructor(private dialog: MatDialog,) {
    }

    ngOnInit(): void {
    }

    public deleteAttribute(attr: IAttribute<any>) {
        this.attributes = this.attributes.filter(item => item !== attr);
    }

    public typeof(value: any) {
        return typeof value;
    }

    openNewDialog() {
        this.dialog
            .open(AttributesDialogComponent)
            .afterClosed()
            .subscribe((attr: IAttribute<any>) => this.attributes.push(attr));
    }
}

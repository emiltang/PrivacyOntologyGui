import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ObjectDialogComponent} from './object-dialog/object-dialog.component';
import INode from '../core/model/INode';

@Component({
    selector: 'app-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

    @Input() node?: INode;

    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    public openDialog() {
        const dialog = this.dialog.open(ObjectDialogComponent, this.node);
        dialog.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}

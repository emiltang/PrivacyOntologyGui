import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {v4 as uuidv4} from 'uuid';
import {INode, NodeType} from '../../core/model';

@Component({
    selector: 'app-new-object',
    templateUrl: './new-object.component.html',
    styleUrls: ['./new-object.component.scss']
})
export class NewObjectComponent implements OnInit {

    constructor(public dialog: MatDialogRef<NewObjectComponent>) {
    }

    ngOnInit(): void {
    }

    public newData() {
        const node: INode = {
            id: uuidv4(),
            name: '',
            nodeType: NodeType.data,
            type: null,
            superType: null,
            links: [],
            attributes: []
        };
        this.dialog.close(node);
    }

    public newContext() {
        const node: INode = {
            id: uuidv4(),
            name: '',
            nodeType: NodeType.context,
            type: null,
            superType: null,
            links: [],
            attributes: []
        };
        this.dialog.close(node);
    }
}

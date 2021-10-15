import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import { INode, NodeType } from '../../core/model';

@Component({
    selector: 'app-new-object',
    templateUrl: './new-object.component.html',
    styleUrls: ['./new-object.component.scss']
})
export class NewObjectComponent implements OnInit {

    private node: INode = {
        id: uuidv4(),
        name: '',
        nodeType: NodeType.data,
        type: '',
        superType: '',
        links: [],
        attributes: []
    };

    constructor(public dialog: MatDialogRef<NewObjectComponent>) {
    }

    ngOnInit(): void {
    }

    public newData() {
        this.node.nodeType = NodeType.data;
        this.dialog.close(this.node);
    }

    public newContext() {
        this.node.nodeType = NodeType.context;
        this.dialog.close(this.node);
    }

}

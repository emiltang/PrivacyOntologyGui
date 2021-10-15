import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';
import { INode, NodeType } from '../core/model';
import { NodeService } from '../core/services/node.service';

@Component({
    selector: 'app-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

    @Input()
    public node: INode;
    public icon: string;

    constructor(private dialog: MatDialog,
                private nodeService: NodeService) {
    }

    public ngOnInit() {
        switch (this.node.nodeType) {
            case NodeType.context:
                this.icon = 'home';
                break;
            case NodeType.data:
                this.icon = 'assessment';
                break;
        }
    }

    public openDialog() {
        const dialog = this.dialog.open(ObjectDialogComponent, {data: this.node});
        dialog.afterClosed()
            .subscribe(result => console.log(`Dialog result: ${result}`));
    }

    public deleteNode() {
        this.nodeService.deleteNode(this.node);
    }
}

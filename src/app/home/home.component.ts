import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeService } from '../core/services/node.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewObjectComponent } from '../object/new-object/new-object.component';
import { ObjectDialogComponent } from '../object/object-dialog/object-dialog.component';
import { INode } from '../core/model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    query = '';

    nodes: Observable<INode[]>;
    options: any[] = ['one', 'two', 'three'];

    constructor(private router: Router,
                private nodeService: NodeService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.nodes = this.nodeService.nodes;
    }

    public openNewNodeDialog() {
        this.dialog
            .open(NewObjectComponent)
            .afterClosed()
            .subscribe((node: INode) => this.dialog
                .open(ObjectDialogComponent, {data: node})
                .afterClosed()
                .subscribe((value: INode) => this.nodeService.addNode(value))
            );
    }
}

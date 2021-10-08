import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NodeService} from '../core/services/node.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {NewObjectComponent} from '../object/new-object/new-object.component';
import {ObjectDialogComponent} from '../object/object-dialog/object-dialog.component';
import {INode} from '../core/model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    nodes: Observable<INode[]>;

    constructor(private router: Router,
                private nodeService: NodeService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.nodes = this.nodeService.nodes;
    }

    public openNewNodeDialog() {
        const dialog = this.dialog.open(NewObjectComponent);
        dialog.afterClosed().subscribe(node => {
            console.log(`Dialog result: ${node}`);
            this.dialog
                .open(ObjectDialogComponent, {data: node})
                .afterClosed()
                .subscribe(value => console.log(value));
        });
    }


}

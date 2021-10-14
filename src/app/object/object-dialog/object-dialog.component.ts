import {Component, Inject, OnInit} from '@angular/core';
import {OntologiesService} from '../../core/services/ontologies.service';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {INode, IRdfType, NodeType} from '../../core/model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-object-dialog',
    templateUrl: './object-dialog.component.html',
    styleUrls: ['./object-dialog.component.scss']
})
export class ObjectDialogComponent implements OnInit {

    nodeType: Observable<IRdfType[]>;
    superType: Observable<IRdfType[]>;
    disabled = false;
    formControl = new FormControl('');
    constructor(@Inject(MAT_DIALOG_DATA)
                public node: INode,
                private ontologiesService: OntologiesService) {
    }

    public ngOnInit() {
        console.log(ObjectDialogComponent.name, this.node);
        switch (this.node.nodeType) {
            case NodeType.data:
                this.nodeType = this.ontologiesService.data;
                break;
            case NodeType.context:
                this.nodeType = this.ontologiesService.context;
                break;
        }

        switch (this.node.nodeType) {
            case NodeType.data:
                this.superType = this.ontologiesService.dataTypes;
                break;
            case NodeType.context:
                this.disabled = true;
                break;
        }
    }
}

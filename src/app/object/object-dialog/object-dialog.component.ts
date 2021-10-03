import {Component, Inject, OnInit} from '@angular/core';
import INode, {NodeType} from '../../core/model/INode';
import {OntologiesService} from '../../core/services/ontologies.service';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import IRdfType from '../../core/model/IRdfType';

@Component({
    selector: 'app-object-dialog',
    templateUrl: './object-dialog.component.html',
    styleUrls: ['./object-dialog.component.scss']
})
export class ObjectDialogComponent implements OnInit {


    nodeType: Observable<IRdfType[]>;

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
    }

}

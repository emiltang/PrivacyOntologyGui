import {Component, Inject, OnInit} from '@angular/core';
import INode from '../../core/model/INode';
import {OntologiesService} from '../../core/services/ontologies.service';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-object-dialog',
    templateUrl: './object-dialog.component.html',
    styleUrls: ['./object-dialog.component.scss']
})
export class ObjectDialogComponent implements OnInit {

    @Inject(MAT_DIALOG_DATA)
    node: INode;

    context: Observable<string[]>;

    // node: INode = {
    //     id: randomUUID(),
    //     name: 'name',
    //     type: 'type',
    //     superType: 'type',
    //     attributes: []
    // };

    constructor(private ontologiesService: OntologiesService) {
    }

    ngOnInit(): void {
        this.context = this.ontologiesService.context;
    }

}

import {Component, OnInit} from '@angular/core';
import {Node} from '../../core/model/Node';
import {OntologiesService} from '../../core/services/ontologies.service';

@Component({
    selector: 'app-object-dialog',
    templateUrl: './object-dialog.component.html',
    styleUrls: ['./object-dialog.component.scss']
})
export class ObjectDialogComponent implements OnInit {

    node: Node = {
        name: 'name',
        type: 'type',
        superType: 'type',
        attribute: []
    };

    constructor(private ontologiesService: OntologiesService) {
    }

    ngOnInit(): void {
        this.ontologiesService.context();
    }

}

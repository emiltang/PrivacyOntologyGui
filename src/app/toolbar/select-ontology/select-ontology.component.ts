import { Component, OnInit } from '@angular/core';
import { OntologiesService } from '../../core/services/ontologies.service';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'app-select-ontology',
    templateUrl: './select-ontology.component.html',
    styleUrls: ['./select-ontology.component.scss']
})
export class SelectOntologyComponent implements OnInit {

    currentNamespace: Observable<string>;

    ontologies: string[];

    constructor(private ontologiesService: OntologiesService) {
    }

    ngOnInit(): void {
        this.ontologies = this.ontologiesService.ontologies;
        this.currentNamespace = this.ontologiesService.currentNamespace;

    }

    public setCurrentNamespace(event: MatSelectChange) {
        this.ontologiesService.namespace = event.value;
    }
}


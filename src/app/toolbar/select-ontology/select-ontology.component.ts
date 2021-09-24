import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {OntologiesService} from '../../core/services/ontologies.service';

@Component({
  selector: 'app-select-ontology',
  templateUrl: './select-ontology.component.html',
  styleUrls: ['./select-ontology.component.scss']
})
export class SelectOntologyComponent implements OnInit {

  formControl = new FormControl();
  ontologies: string[];

  constructor(private ontologiesService: OntologiesService) {
  }

  ngOnInit(): void {
    this.ontologies = this.ontologiesService.ontologies;
  }
}

import {Injectable} from '@angular/core';
import ontologies from '../../../assets/ontologies.json';

@Injectable({
  providedIn: 'root'
})
export class OntologiesService {

  constructor() {
  }

  public get ontologies(): string[] {
    return ontologies.ontologies;
  }
}

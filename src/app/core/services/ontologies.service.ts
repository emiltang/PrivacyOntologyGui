import {Injectable} from '@angular/core';
import ontologies from '../../../assets/ontologies.json';
import {ElectronService} from 'ngx-electron';

@Injectable({
    providedIn: 'root'
})
export class OntologiesService {


    constructor(private electronService: ElectronService) {
    }

    public get ontologies(): string[] {
        return ontologies.ontologies;
    }


    public context() {
        this.electronService.ipcRenderer.send('get-context');
    }

}

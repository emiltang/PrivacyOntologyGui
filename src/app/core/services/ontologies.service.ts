import { Injectable } from '@angular/core';
import ontologies from '../../../assets/ontologies.json';
import { ElectronService } from 'ngx-electron';
import { defer, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OntologiesService {

    constructor(private electronService: ElectronService) {
    }

    public get ontologies(): string[] {
        return ontologies.ontologies;
    }

    public get context(): Observable<string[]> {
        return defer(async () => await this.electronService.ipcRenderer.invoke('get-context'));
    }

    public get data(): Observable<string[]> {
        return defer(async () => await this.electronService.ipcRenderer.invoke('get-data'));
    }

    public get dataTypes(): Observable<string[]> {
        return defer(async () => await this.electronService.ipcRenderer.invoke('get-data-types'));
    }
}

import {Injectable} from '@angular/core';
import ontologies from '../../../assets/ontologies.json';
import {ElectronService} from 'ngx-electron';
import {defer, Observable} from 'rxjs';
import {NodeService} from './node.service';
import {IRdfType} from '../model';

@Injectable({
    providedIn: 'root'
})
export class OntologiesService {

    constructor(private electronService: ElectronService) {
    }

    public get ontologies(): string[] {
        return ontologies.ontologies;
    }

    public get context(): Observable<IRdfType[]> {
        return defer(async () => {
            const result = await this.electronService.ipcRenderer.invoke('get-context');
            return result.map(str => ({
                displayName: NodeService.truncateDisplayName(str),
                fullName: str
            }));
        });
    }

    public get data(): Observable<IRdfType[]> {
        return defer(async () => {
            const result = await this.electronService.ipcRenderer.invoke('get-data');
            return result.map(str => ({
                displayName: NodeService.truncateDisplayName(str),
                fullName: str
            }));
        });
    }

    public get dataTypes(): Observable<IRdfType[]> {
        return defer(async () => {
            const result = await this.electronService.ipcRenderer.invoke('get-data-types');
            return result.map(str => ({
                displayName: NodeService.truncateDisplayName(str),
                fullName: str
            }));
        });
    }
}

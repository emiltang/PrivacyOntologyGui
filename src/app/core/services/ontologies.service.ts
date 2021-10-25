import { Injectable } from '@angular/core';
import ontologies from '../../../assets/ontologies.json';
import { ElectronService } from 'ngx-electron';
import { BehaviorSubject, defer, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OntologiesService {

    private _currentNamespace = new BehaviorSubject<string>(ontologies.ontologies[ 0 ]);
    // eslint-disable-next-line
    public readonly currentNamespace: Observable<string> = this._currentNamespace.asObservable();

    constructor(private electronService: ElectronService) {
    }

    public get ontologies(): string[] {
        return ontologies.ontologies;
    }

    public get context(): Observable<string[]> {
        console.log(this._currentNamespace.getValue());
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-context', this._currentNamespace.getValue())
        );
    }

    public get data(): Observable<string[]> {
        console.log(this._currentNamespace.getValue());
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-data', this._currentNamespace.getValue())
        );
    }

    public get dataTypes(): Observable<string[]> {
        console.log(this._currentNamespace.getValue());
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-data-types', this._currentNamespace.getValue())
        );
    }

    public get namespace() {
        return this._currentNamespace.getValue();
    }

    public set namespace(namespace: string) {
        this._currentNamespace.next(namespace);
    }

    public dataAttributes(type: string): Observable<string[]> {
        console.log(this._currentNamespace.getValue());
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-data-attributes', this._currentNamespace.getValue(), type)
        );
    }
}

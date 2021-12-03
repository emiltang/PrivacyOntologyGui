import { Injectable } from '@angular/core';
import ontologies from '../../../assets/ontologies.json';
import { BehaviorSubject, defer, Observable } from 'rxjs';
import { ElectronService } from './electron.service';

@Injectable({
    providedIn: 'root'
})
export class OntologiesService {

    private _currentNamespace = new BehaviorSubject<string>('');
    // eslint-disable-next-line
    public readonly currentNamespace: Observable<string> = this._currentNamespace.asObservable();

    constructor(private electronService: ElectronService) {
    }

    public get predicates(): Observable<string[]> {
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-predicates', this._currentNamespace.getValue())
        );
    }

    public get ontologies(): string[] {
        return ontologies.ontologies;
    }

    public get context(): Observable<string[]> {
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-context', this._currentNamespace.getValue())
        );
    }

    public get data(): Observable<string[]> {
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-data', this._currentNamespace.getValue())
        );
    }

    public get dataTypes(): Observable<string[]> {
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
        return defer(async () =>
            await this.electronService.ipcRenderer.invoke('get-data-attributes', this._currentNamespace.getValue(), type)
        );
    }
}

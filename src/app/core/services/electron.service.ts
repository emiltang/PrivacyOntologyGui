import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    ipcRenderer: typeof ipcRenderer;
    webFrame: typeof webFrame;
    // remote: typeof remote;
    childProcess: typeof childProcess;
    fs: typeof fs;

    constructor() {
        // Conditional imports
        if (this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;

            this.childProcess = window.require('child_process');
            this.fs = window.require('fs');

            // If you want to use a NodeJS 3rd party deps in Renderer process (like @electron/remote),
            // it must be declared in dependencies of both package.json (in root and app folders)
            // If you want to use remote object in renderer process, please set enableRemoteModule to true in main.ts
            // this.remote = window.require('@electron/remote');
        }
    }

    get isElectron(): boolean {
        return !!(window && window.process && window.process.type);
    }
}

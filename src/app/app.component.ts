import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild('drawer') public drawer: MatSidenav;

    showFiller = false;

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en');
        console.log('APP_CONFIG', APP_CONFIG);
    }
}

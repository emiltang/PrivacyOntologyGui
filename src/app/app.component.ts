import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFiller = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);
  }
}

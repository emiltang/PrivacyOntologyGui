import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class HomeModule {
}

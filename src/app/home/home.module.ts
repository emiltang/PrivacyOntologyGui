import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ObjectModule } from '../object/object.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FilterNodesPipe } from './filter-nodes.pipe';

@NgModule({
    declarations: [HomeComponent, FilterNodesPipe],
    exports: [],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        ObjectModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatInputModule,
    ]
})
export class HomeModule {
}

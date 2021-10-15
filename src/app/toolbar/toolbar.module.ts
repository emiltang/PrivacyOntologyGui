import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HomeModule} from '../home/home.module';
import {SelectOntologyComponent} from './select-ontology/select-ontology.component';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        ToolbarComponent,
        SelectOntologyComponent
    ],
    exports: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        HomeModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        FlexModule
    ]
})
export class ToolbarModule {
}

import {NgModule} from '@angular/core';
import {ResultComponent} from './result.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '../core/core.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {FilterPipe} from './filter.pipe';
import {PrivacyRiskComponent} from './privacy-risk/privacy-risk.component';
import {SortRiskPipe} from './sort-risk.pipe';
import {CommonModule} from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
    declarations: [
        ResultComponent,
        FilterPipe,
        PrivacyRiskComponent,
        SortRiskPipe
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        CoreModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatTableModule,
        NgxChartsModule
    ]
})
export class ResultModule {
}

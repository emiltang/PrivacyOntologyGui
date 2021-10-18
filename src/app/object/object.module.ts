import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectComponent } from './object.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NewObjectComponent } from './new-object/new-object.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CoreModule } from '../core/core.module';
import { LinksComponent } from './object-dialog/links/links.component';
import { AttributesComponent } from './object-dialog/attributes/attributes.component';
import { AttributesDialogComponent } from './object-dialog/attributes/attributes-dialog/attributes-dialog.component';


@NgModule({
    declarations: [
        ObjectComponent,
        ObjectDialogComponent,
        NewObjectComponent,
        LinksComponent,
        AttributesComponent,
        AttributesDialogComponent,
    ],
    exports: [
        ObjectComponent,
    ],
    imports: [
        CoreModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatDividerModule,
        MatIconModule,
        MatTooltipModule
    ]
})
export class ObjectModule {
}

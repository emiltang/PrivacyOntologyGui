import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObjectComponent} from './object.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ObjectDialogComponent} from './object-dialog/object-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    ObjectComponent,
    ObjectDialogComponent
  ],
  exports: [
    ObjectComponent
  ],
  imports: [
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
    MatDividerModule
  ]
})
export class ObjectModule {
}

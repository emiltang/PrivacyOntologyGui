import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ObjectDialogComponent} from './object-dialog/object-dialog.component';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openDialog() {
    const dialog = this.dialog.open(ObjectDialogComponent);
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

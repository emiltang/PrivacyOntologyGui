import { Component, Input, OnInit } from '@angular/core';
import { ILink } from '../../../core/model';
import { MatDialog } from '@angular/material/dialog';
import { LinksDialogComponent } from './links-dialog/links-dialog.component';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    @Input() links: ILink[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    public deleteLink(link: ILink) {
        this.links = this.links.filter(item => item !== link);
    }

    openNewDialog() {
        this.dialog
            .open(LinksDialogComponent)
            .afterClosed()
            .subscribe((link: ILink) => this.links.push(link));
    }
}

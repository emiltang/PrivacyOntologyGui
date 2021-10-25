import { Component, OnInit } from '@angular/core';
import { ILink } from '../../../../core/model';

@Component({
    selector: 'app-links-dialog',
    templateUrl: './links-dialog.component.html',
    styleUrls: ['./links-dialog.component.scss']
})
export class LinksDialogComponent implements OnInit {

    link: ILink = {
        predicate: null,
        object: null
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}

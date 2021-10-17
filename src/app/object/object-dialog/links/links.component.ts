import { Component, Input, OnInit } from '@angular/core';
import { ILink } from '../../../core/model';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    @Input() links: ILink[];

    constructor() {
    }

    ngOnInit(): void {
    }

    public deleteLink(link: ILink) {
        this.links = this.links.filter(item => item !== link);
    }
}

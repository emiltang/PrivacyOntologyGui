import { Component, Input, OnInit } from '@angular/core';
import { IAttribute } from '../../../core/model';

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

    @Input() attributes: IAttribute<any>[];

    constructor() {
    }

    ngOnInit(): void {
    }

    public deleteAttribute(attr: IAttribute<any>) {
        this.attributes = this.attributes.filter(item => item !== attr);
    }

    public typeof(value: any) {
        return typeof value;
    }
}

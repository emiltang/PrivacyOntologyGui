import { Component, OnInit } from '@angular/core';
import { IAttribute } from "../../../../core/model";

@Component({
    selector: 'app-attributes-dialog',
    templateUrl: './attributes-dialog.component.html',
    styleUrls: ['./attributes-dialog.component.scss']
})
export class AttributesDialogComponent implements OnInit {

    attribute: IAttribute<any> = {
        value: null,
        name: ''
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}

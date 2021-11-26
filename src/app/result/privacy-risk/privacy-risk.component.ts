import {Component, Input, OnInit} from '@angular/core';
import {IResult} from '../../core/model';

@Component({
    selector: 'app-privacy-risk',
    templateUrl: './privacy-risk.component.html',
    styleUrls: ['./privacy-risk.component.scss']
})
export class PrivacyRiskComponent implements OnInit {

    @Input()
    result: IResult;

    displayedColumns: string[] = ['name', 'description', 'score', 'templateCount'];

    constructor() {
    }

    ngOnInit(): void {
    }

}

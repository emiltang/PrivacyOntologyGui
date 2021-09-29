import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
}

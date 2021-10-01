import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NodeService} from '../core/services/node.service';
import INode from '../core/model/INode';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    nodes: Observable<INode[]>;

    constructor(private router: Router, private nodeService: NodeService) {
    }

    ngOnInit(): void {
        this.nodes = this.nodeService.nodes;
    }
}

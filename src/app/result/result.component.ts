import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeService } from '../core/services/node.service';
import { Observable } from 'rxjs';
import { ToolchainApiService } from '../core/services/toolchain-api.service';
import { ResultDTO } from '../core/dto';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    displayedColumns: string[] = ['name', 'description', 'score', 'template_count'];
    result: Observable<ResultDTO>;

    constructor(private router: Router,
                private location: Location,
                private nodeService: NodeService,
                private toolchainApiService: ToolchainApiService,
                private httpClient: HttpClient
    ) {
    }

    ngOnInit() {
        // Use result from json file for easier development
        this.result = this.httpClient.get<ResultDTO>('../../assets/test_result.json');
        // this.nodeService.nodes.subscribe(nodes =>
        //     this.result = this.toolchainApiService.postToolchain(nodes)
        // );
        // print value of result for debugging
        // this.result.subscribe(value =>
        //     console.log(typeof value, JSON.stringify(value))
        // );
    }

    back() {
        this.location.back();
    }
}

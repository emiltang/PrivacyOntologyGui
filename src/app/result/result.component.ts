import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NodeService} from '../core/services/node.service';
import {Observable} from 'rxjs';
import {ToolchainApiService} from '../core/services/toolchain-api.service';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IResult} from '../core/model';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    results: Observable<IResult[]>;
    data: Observable<any[]>;
    view: any[] = [700, 400];
    // options
    showLegend = true;
    showLabels = true;
    isDoughnut = false;
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor(private router: Router,
                private location: Location,
                private nodeService: NodeService,
                private toolchainApiService: ToolchainApiService,
                private httpClient: HttpClient
    ) {
    }

    ngOnInit() {
        // Use result from json file for easier development
        //this.result = this.httpClient.get<ResultDTO>('../../assets/test_result.json');
        this.nodeService.nodes.subscribe(nodes =>
            this.results = this.toolchainApiService.postToolchain(nodes)
        );
        // print value of result for debugging
        // this.result.subscribe(value =>
        //     console.log(typeof value, JSON.stringify(value))
        // );
        this.data = this.results.pipe(map(results => {
            const counts: Map<number, number> = new Map();
            results.forEach(result => {
                if (Number.isNaN(counts[ result.score ])) {
                    counts[ result.score ] = 0;
                } else {
                    counts[ result.score ] += 1;
                }
            });
            return Object.entries(counts).map(([name, value]) => ({name, value}));
        }));
    }

    back() {
        this.location.back();
    }
}

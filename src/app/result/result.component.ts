import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeService } from '../core/services/node.service';
import { Observable } from 'rxjs';
import { ToolchainApiService } from '../core/services/toolchain-api.service';
import { ResultDTO } from '../core/dto';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    result: Observable<ResultDTO>;


    constructor(private router: Router,
                private nodeService: NodeService,
                private toolchainApiService: ToolchainApiService) {
    }

    ngOnInit() {
        this.nodeService.nodes.subscribe(nodes =>
            this.result = this.toolchainApiService.postToolchain(nodes)
        );
        this.result.subscribe(value =>
            console.log(typeof value, JSON.stringify(value))
        );
    }


}

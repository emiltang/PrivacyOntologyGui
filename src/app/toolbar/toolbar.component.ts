import { Component, OnInit } from '@angular/core';
import { ToolchainApiService } from '../core/services/toolchain-api.service';
import { NodeService } from '../core/services/node.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    constructor(private toolchainApiService: ToolchainApiService, private nodeService: NodeService) {
    }

    ngOnInit(): void {
    }

    runAnalysis() {
        this.nodeService.nodes.subscribe(value => this.toolchainApiService.postToolchain(value).subscribe(value1 => console.log(value1)));
    }
}

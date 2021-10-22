import { Component, OnInit } from '@angular/core';
import { ToolchainApiService } from '../core/services/toolchain-api.service';
import { NodeService } from '../core/services/node.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    constructor(private router: Router,
                private toolchainApiService: ToolchainApiService,
                private nodeService: NodeService) {
    }

    ngOnInit(): void {
    }

    runAnalysis() {
        this.router.navigate(['/result']);
    }
}

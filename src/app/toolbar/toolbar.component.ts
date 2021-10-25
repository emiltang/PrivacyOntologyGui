import { Component, Input, OnInit } from '@angular/core';
import { ToolchainApiService } from '../core/services/toolchain-api.service';
import { NodeService } from '../core/services/node.service';
import { Router } from '@angular/router';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Input() drawer: MatDrawer;

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

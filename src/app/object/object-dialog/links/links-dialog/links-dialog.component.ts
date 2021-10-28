import { Component, OnInit } from '@angular/core';
import { ILink, INode } from '../../../../core/model';
import { Observable } from 'rxjs';
import { NodeService } from '../../../../core/services/node.service';
import { OntologiesService } from '../../../../core/services/ontologies.service';

@Component({
    selector: 'app-links-dialog',
    templateUrl: './links-dialog.component.html',
    styleUrls: ['./links-dialog.component.scss']
})
export class LinksDialogComponent implements OnInit {

    link: ILink = {
        predicate: null,
        object: null
    };

    predicates: Observable<string[]>;
    nodes: Observable<INode[]>;

    constructor(private nodeService: NodeService,
                private ontologiesService: OntologiesService) {

    }

    ngOnInit(): void {
        this.nodes = this.nodeService.nodes;
        this.predicates = this.ontologiesService.predicates;
    }

}

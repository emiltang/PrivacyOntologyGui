import { Component, Inject, OnInit } from '@angular/core';
import { IAttribute, INode } from '../../../../core/model';
import { Observable } from 'rxjs';
import { OntologiesService } from '../../../../core/services/ontologies.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-attributes-dialog',
    templateUrl: './attributes-dialog.component.html',
    styleUrls: ['./attributes-dialog.component.scss']
})
export class AttributesDialogComponent implements OnInit {

    public attributeNameList: Observable<string[]>;
    public attribute: IAttribute<any> = {
        value: null,
        name: '',
        dataType: ''
    };
    public readonly dataTypes = ['int', 'double', 'string'];

    public constructor(@Inject(MAT_DIALOG_DATA)
                       public node: INode,
                       private ontologiesService: OntologiesService) {
    }

    public ngOnInit(): void {
        this.attributeNameList = this.ontologiesService.dataAttributes(this.node.type);
    }
}

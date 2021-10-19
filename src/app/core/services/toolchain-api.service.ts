import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DTO } from '../dto';
import { INode } from '../model';
import { OntologiesService } from './ontologies.service';

// eslint-disable-next-line @typescript-eslint/naming-convention
const options = {headers: {'Content-Type': 'application/json'}};
const url = 'http://localhost:5002/api/v1';

@Injectable({
    providedIn: 'root'
})
export class ToolchainApiService {

    public constructor(private http: HttpClient,
                       private ontologiesService: OntologiesService) {
    }


    // TODO: fix address url
    public postToolchain(nodes: INode[]): Observable<any> {
        const data: DTO = {
            nodes: nodes.map(node => ({
                name: node.name,
                address: node.id,
                type: node.type,
                superType: node.superType,
                attributes: node.attributes.map(attr => ({
                    value: attr.value,
                    name: attr.name,
                    dataType: typeof attr.value
                }))
            })),
            links: nodes.flatMap(node => node.links.map(link => ({
                subject: node.id,
                predicate: link.predicate,
                object: link.object.id
            }))),
            namespace: this.ontologiesService.namespace
        };
        return this.http.post<any>(url, data, options);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DTO, ResultDTO } from '../dto';
import { INode } from '../model';
import { OntologiesService } from './ontologies.service';

// eslint-disable-next-line @typescript-eslint/naming-convention
const options = {headers: {'Content-Type': 'application/json'}};
const url = 'http://localhost:5002/api/v1';


@Injectable({
    providedIn: 'root'
})
export class ToolchainApiService {

    private readonly namespace = 'https://ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#';

    public constructor(private http: HttpClient,
                       private ontologiesService: OntologiesService) {
    }


    public static resolveType(param: 'undefined' | 'object' | 'boolean' | 'number' | 'string' | 'function' | 'symbol' | 'bigint', value: any): string {
        switch (param) {
            case 'number':
                return Number.isInteger(value) ? 'int' : 'double';
            case 'string':
                return 'string';
        }
    }

    // TODO: fix address url
    public postToolchain(nodes: INode[]): Observable<ResultDTO> {
        const data: DTO = {
            nodes: nodes.map(node => ({
                name: node.name,
                address: `${this.namespace}${node.name}`,
                type: node.type,
                superType: node.superType,
                attributes: node.attributes.map(attr => ({
                    value: attr.value,
                    name: attr.name,
                    dataType: attr.dataType
                }))
            })),
            links: nodes.flatMap(node => node.links.map(link => ({
                subject: `${this.namespace}${node.name}`,
                predicate: link.predicate,
                object: `${this.namespace}${link.object.name}`
            }))),
            namespace: this.namespace
        };
        console.log(JSON.stringify(data));
        return this.http.post<ResultDTO>(url, data, options);
    }
}

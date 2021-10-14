import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DTO } from '../dto';
import { INode } from '../model';

// eslint-disable-next-line @typescript-eslint/naming-convention
const options = {headers: {'Content-Type': 'application/json'}};
const url = 'http://localhost:5002/api/v1';

@Injectable({
    providedIn: 'root'
})
export class ToolchainApiService {

    constructor(private http: HttpClient) {
    }

    // TODO: fix address url
    // TODO: fix namespace
    public postToolchain(nodes: INode[]): Observable<any> {
        const data: DTO = {
            nodes: nodes.map(node => ({
                name: node.name,
                address: node.name,
                type: node.type.fullName,
                superType: node.superType.fullName,
                attributes: node.attributes.map(attr => ({
                    value: attr.value,
                    name: attr.name,
                    dataType: typeof attr.value
                }))
            })),
            links: nodes.flatMap(node => node.links.map(link => ({
                subject: node.name,
                predicate: link.predicate,
                object: link.object
            }))),
            namespace: ''
        };
        return this.http.post<any>(url, data, options);
    }
}

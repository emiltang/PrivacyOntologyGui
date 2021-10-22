import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OntologiesService } from './ontologies.service';
import { HttpClient } from '@angular/common/http';
import { DTO } from '../dto';
import { v4 as uuidv4 } from 'uuid';
import { INode, NodeType } from '../model';


@Injectable({
    providedIn: 'root'
})
export class NodeService {

    private _nodes = new BehaviorSubject<INode[]>([]);
    readonly nodes: Observable<INode[]> = this._nodes.asObservable();

    public constructor(private ontologiesService: OntologiesService,
                       private httpClient: HttpClient) {
        this.init().then(value => {
            this._nodes.getValue().push(...value);
        });
    }

    public findNodeById(id: string): INode {
        return this._nodes.getValue().find(value => value.id === id);
    }

    public addNode(node: INode): void {
        this._nodes.getValue().push(node);
    }

    public deleteNode(node: INode): void {
        const index = this._nodes.value.findIndex(value => value.id === node.id);
        this._nodes.getValue().splice(index, 1);
    }

    public links(node: INode): Observable<INode[]> {
        return this.nodes.pipe(
            map(n => n.filter(x => x.id !== node.id))
        );
    }

    private async init(): Promise<INode[]> {
        const dto = await this.httpClient.get<DTO>('./assets/test1.json').toPromise();

        const addressMap: Map<string, INode> = new Map<string, INode>();
        const nodes = dto.nodes.map(nodeDTO => {
            const node = {
                nodeType: NodeType.data,
                id: uuidv4(),
                name: nodeDTO.name,
                type: nodeDTO.type,
                superType: nodeDTO.superType,
                attributes: nodeDTO.attributes.map(attributeDTO => ({
                    name: attributeDTO.name,
                    value: attributeDTO.value
                })),
                links: [] // leave empty and add when all nodes are constructed
            };
            // remember the mapping between address and node
            addressMap[ nodeDTO.address ] = node;
            return node;
        });

        // sort out links
        dto.links.forEach(linkDTO => {
            // find node matching link subject
            const node = addressMap[ linkDTO.subject ];
            const link = {
                predicate: linkDTO.predicate,
                object: addressMap[ linkDTO.object ]
            };
            node.links.push(link);
        });
        return nodes;
    }
}

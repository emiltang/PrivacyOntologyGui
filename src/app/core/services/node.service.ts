import {Injectable} from '@angular/core';
import INode from '../model/INode';
import {BehaviorSubject, Observable} from 'rxjs';
import {OntologiesService} from './ontologies.service';
import {HttpClient} from '@angular/common/http';
import {DTO} from '../dto/dto';
import {v4 as uuidv4} from 'uuid';


@Injectable({
    providedIn: 'root'
})
export class NodeService {
    private _nodes = new BehaviorSubject<INode[]>([]);
    // eslint-disable-next-line
    public readonly nodes: Observable<INode[]> = this._nodes.asObservable();

    public constructor(private ontologiesService: OntologiesService,
                       private httpClient: HttpClient) {
        this.init().then(value => {
            this._nodes.getValue().push(...value);
        });
    }

    /**
     *  https://try2explore.com/questions/10187968
     *
     * @param str removes everything before '#'
     */
    private static truncateDisplayName(str: string): string {
        return str.replace(/^.*#(.*)$/, '$1');
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

    private async init(): Promise<INode[]> {
        const dto = await this.httpClient.get<DTO>('./assets/test1.json').toPromise();
        return dto.nodes.map(nodeDTO => ({
            id: uuidv4(),
            name: nodeDTO.name,
            type: {displayName: NodeService.truncateDisplayName(nodeDTO.type), fullName: nodeDTO.type},
            superType: {
                displayName: NodeService.truncateDisplayName(nodeDTO.superType),
                fullName: nodeDTO.superType
            },
            attributes: nodeDTO.attributes.map(attributeDTO => ({
                name: attributeDTO.name,
                value: attributeDTO.value
            })),
            links: dto.links.filter(link => link.subject === nodeDTO.address)
                .map(linkDTO => ({
                    predicate: linkDTO.predicate,
                    object: linkDTO.object
                }))
        }));
    }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PrivacyRiskResultDTO, ResultDTO} from '../dto';
import {INode, IResult} from '../model';
import {map} from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/naming-convention
const options = {headers: {'Content-Type': 'application/json'}};
const url = 'http://localhost:5002/api/v1';


@Injectable({
    providedIn: 'root'
})
export class ToolchainApiService {

    private readonly namespace = 'https://ontology.hviidnet.com/2020/01/03/privacyvunl-model.ttl#';

    public constructor(private http: HttpClient) {
    }


    public static resolveType(param: 'undefined' | 'object' | 'boolean' | 'number' | 'string' | 'function' | 'symbol'
        | 'bigint', value: any): string {
        switch (param) {
            case 'number':
                return Number.isInteger(value) ? 'int' : 'double';
            case 'string':
                return 'string';
        }
    }

    private static resultDTOtoResultList(result: ResultDTO): IResult[] {
        return Object.entries(result.privacy_report)
            .map(([title, report]: [string, PrivacyRiskResultDTO]): IResult => ({
                title,
                score: report.privacy_score,
                type: report.type,
                privacyRisks: report.privacy_risks.map(value => ({
                        name: value.privacy_risks_name,
                        description: value.privacy_risk_description,
                        privacyStrategies: value.privacy_strategies,
                        score: value.privacy_score,
                        templateCount: value.template_count
                    })
                )
            }));
    }

    private static nodeListToDTO(nodes: INode[], namespace: string) {
        return {
            nodes: nodes.map(node => ({
                name: node.name,
                address: `${namespace}${node.name}`,
                type: node.type,
                superType: node.superType,
                attributes: node.attributes.map(attr => ({
                    value: attr.value,
                    name: attr.name,
                    dataType: attr.dataType
                }))
            })),
            links: nodes.flatMap(node => node.links.map(link => ({
                subject: `${namespace}${node.name}`,
                predicate: link.predicate,
                object: `${namespace}${link.object.name}`
            }))),
            namespace
        };
    }

    // TODO: fix address url
    public postToolchain(nodes: INode[]): Observable<IResult[]> {
        const data = ToolchainApiService.nodeListToDTO(nodes, this.namespace);
        // console.log(JSON.stringify(data));
        return this.http.post<ResultDTO>(url, data, options)
            .pipe(map(result => ToolchainApiService.resultDTOtoResultList(result)));
    }
}

import {IQueryResultBindings, newEngine} from "@comunica/actor-init-sparql";

export namespace Sparql {

    const myEngine = newEngine();

    const queryContextString = `
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?s
        WHERE { ?s rdfs:subClassOf* <https://ontology.hviidnet.com/2020/01/03/privacyvunlV2.ttl#Context> }
    `

    export async function queryContext(): Promise<string[]> {
        const result = <IQueryResultBindings>await myEngine.query(queryContextString, {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/smartbuildingprivacyvunl.rdf'}
            ],
        });
        const bindings = await result.bindings();
        return bindings.map(row => row.get('?s').value)
    }

    const queryDataString = `
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?s
        WHERE { ?s rdf:type/rdfs:subClassOf* <https://ontology.hviidnet.com/2020/01/03/privacyvunl.ttl#Data> }
    `

    export async function queryData(): Promise<string[]> {
        const result = <IQueryResultBindings>await myEngine.query(queryDataString, {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/smartbuildingprivacyvunl.rdf'}
            ],
        });
        const bindings = await result.bindings();
        return bindings.map(row => row.get('?s').value)
    }
}

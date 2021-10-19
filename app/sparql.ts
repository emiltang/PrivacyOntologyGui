import { IQueryResultBindings, newEngine } from "@comunica/actor-init-sparql";

/**
 * TODO:
 * WARNING injection attacks
 */
export namespace Sparql {

    const myEngine = newEngine();

    export async function queryContext(namespace: string): Promise<string[]> {

        const query = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            SELECT ?s
            WHERE { ?s rdfs:subClassOf* <https://ontology.hviidnet.com/2020/01/03/privacyvunlV2.ttl#Context> }
        `;
        const result = <IQueryResultBindings>await myEngine.query(query, {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: `http://localhost:4200/assets/${namespace}.rdf`}
            ],
        });
        const bindings = await result.bindings();
        return bindings.map(row => row.get('?s').value);
    }


    export async function queryData(namespace: string): Promise<string[]> {

        const query = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            SELECT ?s
            WHERE {
                ?s rdf:type/rdfs:subClassOf* <https://ontology.hviidnet.com/2020/01/03/privacyvunl.ttl#Data>
            }
        `;
        const result = <IQueryResultBindings>await myEngine.query(query, {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: `http://localhost:4200/assets/${namespace}.rdf`}
            ],
        });
        const bindings = await result.bindings();
        return bindings.map(row => row.get('?s').value);
    }


    export async function queryDataTypes(namespace: string): Promise<string[]> {
        const query = `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            SELECT ?s
            WHERE { ?s rdfs:subClassOf <https://ontology.hviidnet.com/2020/01/03/privacyvunl.ttl#Data> }
        `;
        const result = <IQueryResultBindings>await myEngine.query(query, {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: `http://localhost:4200/assets/${namespace}.rdf`}
            ],
        });
        const bindings = await result.bindings();
        return bindings.map(row => row.get('?s').value);
    }

    export async function queryDataAttributes(namespace: string, type: string): Promise<string[]> {
        const query = `
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

            SELECT ?s
            WHERE {
                {
                    ?s rdfs:subPropertyOf owl:topDataProperty .
                    ?s rdfs:domain <https://ontology.hviidnet.com/2020/01/03/privacyvunl.ttl#Data> .
                } UNION {
                    ?s rdfs:subPropertyOf owl:topDataProperty .
                    ?s rdfs:domain <https://ontology.hviidnet.com/2020/01/03/privacyvunl.ttl#${type}> .
                }
            }
	    `;
        const sources = {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: `http://localhost:4200/assets/${namespace}.rdf`}
            ]
        };
        const result = <IQueryResultBindings>await myEngine.query(query, sources);
        const bindings = await result.bindings();
        return bindings.map(row => row.get('?s').value);
    }
}

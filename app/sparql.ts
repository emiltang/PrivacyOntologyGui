import {IQueryResultBindings, newEngine} from "@comunica/actor-init-sparql";

const myEngine = newEngine();

export async function queryContext(): Promise<void> {
    const queryString = `
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?s
        WHERE { ?s rdfs:subClassOf* <https://ontology.hviidnet.com/2020/01/03/privacyvunlV2.ttl#Context>}
  `
    const result = <IQueryResultBindings>await myEngine.query(queryString, {
            sources: [
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunlv2.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/privacyvunl.rdf'},
                {type: 'file', value: 'http://localhost:4200/assets/smartbuildingprivacyvunl.rdf'}
            ],
        }
    );

    result.bindingsStream.on('data', binding => {
        console.log(binding.get('?s').value);
        console.log(binding.get('?s').termType);
    });
    result.bindingsStream.on('error', console.error);
}


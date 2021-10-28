import { Pipe, PipeTransform } from '@angular/core';
import { INode } from '../core/model';

@Pipe({
    name: 'filterNodes'
})
export class FilterNodesPipe implements PipeTransform {

    transform(nodes: INode[], query: string): INode[] {
        if (query === '') {
            return nodes;
        }
        return nodes.filter(node => node.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    }
}

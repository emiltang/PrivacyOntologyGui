import {Pipe, PipeTransform} from '@angular/core';
import {IResult} from '../core/model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    public transform(results: IResult[], query: string): IResult[] {
        return results.filter((value => value.type === query));
    }
}

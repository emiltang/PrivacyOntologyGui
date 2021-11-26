import {Pipe, PipeTransform} from '@angular/core';
import {IResult} from '../core/model';

@Pipe({
    name: 'sortRisk'
})
export class SortRiskPipe implements PipeTransform {

    transform(results: IResult[]): IResult[] {
        return results.sort((a, b) => a.score - b.score);
    }
}

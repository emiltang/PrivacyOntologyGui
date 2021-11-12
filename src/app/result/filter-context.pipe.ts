import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContext'
})
export class FilterContextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): Result {
    return null;
  }

}

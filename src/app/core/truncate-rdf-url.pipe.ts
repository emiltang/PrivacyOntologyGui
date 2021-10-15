import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateRdfUrl'
})
export class TruncateRdfUrlPipe implements PipeTransform {

    /**
     *  https://try2explore.com/questions/10187968
     *
     * @param value removes everything before '#'
     */
    transform(value: string): string {
        return value.replace(/^.*#(.*)$/, '$1');
    }
}

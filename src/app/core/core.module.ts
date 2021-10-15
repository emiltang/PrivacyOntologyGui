import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateRdfUrlPipe } from './truncate-rdf-url.pipe';

@NgModule({
    declarations: [TruncateRdfUrlPipe],
    imports: [
        CommonModule,

    ],
    exports: [TruncateRdfUrlPipe]
})
export class CoreModule {
}

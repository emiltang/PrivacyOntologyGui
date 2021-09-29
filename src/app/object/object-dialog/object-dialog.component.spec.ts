import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ObjectDialogComponent} from './object-dialog.component';

describe('ObjectDialogComponent', () => {
    let component: ObjectDialogComponent;
    let fixture: ComponentFixture<ObjectDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ObjectDialogComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ObjectDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrivacyRiskComponent} from './privacy-risk.component';

describe('PrivacyRiskComponent', () => {
    let component: PrivacyRiskComponent;
    let fixture: ComponentFixture<PrivacyRiskComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PrivacyRiskComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrivacyRiskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

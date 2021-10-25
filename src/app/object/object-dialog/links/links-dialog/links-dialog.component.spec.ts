import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksDialogComponent } from './links-dialog.component';

describe('LinksDialogComponent', () => {
  let component: LinksDialogComponent;
  let fixture: ComponentFixture<LinksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

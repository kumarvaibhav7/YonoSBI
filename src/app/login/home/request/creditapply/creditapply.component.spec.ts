import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditapplyComponent } from './creditapply.component';

describe('CreditapplyComponent', () => {
  let component: CreditapplyComponent;
  let fixture: ComponentFixture<CreditapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

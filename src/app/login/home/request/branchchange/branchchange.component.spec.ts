import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchchangeComponent } from './branchchange.component';

describe('BranchchangeComponent', () => {
  let component: BranchchangeComponent;
  let fixture: ComponentFixture<BranchchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

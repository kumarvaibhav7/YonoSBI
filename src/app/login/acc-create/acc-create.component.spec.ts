import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCreateComponent } from './acc-create.component';

describe('AccCreateComponent', () => {
  let component: AccCreateComponent;
  let fixture: ComponentFixture<AccCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

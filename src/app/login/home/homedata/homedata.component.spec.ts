import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedataComponent } from './homedata.component';

describe('HomedataComponent', () => {
  let component: HomedataComponent;
  let fixture: ComponentFixture<HomedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

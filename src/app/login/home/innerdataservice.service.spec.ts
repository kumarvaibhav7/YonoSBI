import { TestBed } from '@angular/core/testing';

import { InnerdataserviceService } from './innerdataservice.service';

describe('InnerdataserviceService', () => {
  let service: InnerdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

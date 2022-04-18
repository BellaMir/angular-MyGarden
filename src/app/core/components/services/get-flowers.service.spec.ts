import { TestBed } from '@angular/core/testing';

import { GetFlowersService } from './get-flowers.service';

describe('GetFlowersService', () => {
  let service: GetFlowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFlowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

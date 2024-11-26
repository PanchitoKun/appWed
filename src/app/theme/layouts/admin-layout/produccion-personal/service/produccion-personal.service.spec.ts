import { TestBed } from '@angular/core/testing';

import { ProduccionPersonalService } from './produccion-personal.service';

describe('ProduccionPersonalService', () => {
  let service: ProduccionPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduccionPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

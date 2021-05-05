import { TestBed } from '@angular/core/testing';

import { FantacalcioService } from './fantacalcio.service';

describe('FantacalcioService', () => {
  let service: FantacalcioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantacalcioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

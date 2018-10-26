import { TestBed, inject } from '@angular/core/testing';

import { ReceptorService } from './receptor.service';

describe('ReceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceptorService]
    });
  });

  it('should be created', inject([ReceptorService], (service: ReceptorService) => {
    expect(service).toBeTruthy();
  }));
});

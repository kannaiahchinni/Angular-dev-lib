import { TestBed, inject } from '@angular/core/testing';

import { ProcessflowService } from './processflow.service';

describe('ProcessflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessflowService]
    });
  });

  it('should be created', inject([ProcessflowService], (service: ProcessflowService) => {
    expect(service).toBeTruthy();
  }));
});

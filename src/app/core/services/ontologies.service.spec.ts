import {TestBed} from '@angular/core/testing';

import {OntologiesService} from './ontologies.service';

describe('OntologiesService', () => {
  let service: OntologiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OntologiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

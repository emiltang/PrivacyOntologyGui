import {TestBed} from '@angular/core/testing';

import {ToolchainApiService} from './toolchain-api.service';

describe('ToolchainApiService', () => {
  let service: ToolchainApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolchainApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

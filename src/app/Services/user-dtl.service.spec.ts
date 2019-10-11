import { TestBed } from '@angular/core/testing';

import { UserDtlService } from './user-dtl.service';

describe('UserDtlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDtlService = TestBed.get(UserDtlService);
    expect(service).toBeTruthy();
  });
});

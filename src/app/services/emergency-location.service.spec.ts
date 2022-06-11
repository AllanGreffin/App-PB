import { TestBed } from '@angular/core/testing';

import { EmergencyLocationService } from './emergency-location.service';

describe('EmergencyLocationService', () => {
  let service: EmergencyLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencyLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

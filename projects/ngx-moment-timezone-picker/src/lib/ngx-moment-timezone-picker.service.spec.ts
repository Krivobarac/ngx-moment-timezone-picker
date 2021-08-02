import { TestBed } from '@angular/core/testing';

import { NgxMomentTimezonePickerService } from './ngx-moment-timezone-picker.service';

describe('NgxMomentTimezonePickerService', () => {
  let service: NgxMomentTimezonePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMomentTimezonePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

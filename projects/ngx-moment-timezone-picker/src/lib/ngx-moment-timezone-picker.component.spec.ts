import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMomentTimezonePickerComponent } from './ngx-moment-timezone-picker.component';

describe('NgxMomentTimezonePickerComponent', () => {
  let component: NgxMomentTimezonePickerComponent;
  let fixture: ComponentFixture<NgxMomentTimezonePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMomentTimezonePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMomentTimezonePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

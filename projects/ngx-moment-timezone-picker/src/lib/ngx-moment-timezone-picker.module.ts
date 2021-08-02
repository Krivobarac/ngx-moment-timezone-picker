import { NgModule } from '@angular/core';
import { NgxMomentTimezonePickerComponent } from './ngx-moment-timezone-picker.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxMomentTimezonePickerComponent
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxMomentTimezonePickerComponent
  ]
})
export class NgxMomentTimezonePickerModule { }

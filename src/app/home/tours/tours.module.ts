import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';

@NgModule({
  declarations: [
    ToursComponent,
    TourComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToursComponent
  ]
})
export class ToursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { HttpClientModule } from '@angular/common/http';
import { ToursService } from './service/tours.service';
import { PersianDatePipe } from 'src/app/pipes/persian-date.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ToursComponent,
    TourComponent,
    PersianDatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ToursComponent
  ],
  providers: [
    ToursService
  ]
})
export class ToursModule { }

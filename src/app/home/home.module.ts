import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SliderShowComponent } from './slider-show/slider-show.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToursModule } from './tours/tours.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderShowComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ToursModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

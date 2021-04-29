import { Component, OnInit } from '@angular/core';
import { Tour } from './models/tour';
import { TourRequest } from './models/tour-request';
import { ToursService } from './service/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  public tours: Tour[] = [];

  constructor(private service: ToursService) { }

  public async ngOnInit(): Promise<void> {
    this.tours = await this.service.getTours(new TourRequest());
  }

}

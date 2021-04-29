import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../models/tour';
import { TourRequest } from '../models/tour-request';

@Injectable()
export class ToursService {

  constructor(private http: HttpClient) { }

  public async getTours(request: TourRequest): Promise<Tour[]> {
    // return this.http.post<Tour[]>('https://localhost:44386/api/tour/search', request).toPromise();

    return Promise.resolve([
      {
        title: 'تور 1',
        description: ' توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور',
        price: 2500000,
        image: './assets/images/bg2.jpg',
        startDate: new Date(2020, 10, 1),
        endDate: new Date(2020, 10, 5)
      },
      {
        title: 'تور 2',
        description: ' توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور',
        price: 4500000,
        image: './assets/images/bg3.jpg',
        startDate: new Date(2020, 10, 2),
        endDate: new Date(2020, 10, 10)
      },
      {
        title: 'تور 3',
        description: ' توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور',
        price: 3500000,
        image: './assets/images/bg4.jpg',
        startDate: new Date(2020, 10, 3),
        endDate: new Date(2020, 10, 8)
      },
      {
        title: 'تور 4',
        description: ' توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور توضیحات تور',
        price: 3000000,
        image: './assets/images/bg5.jpg',
        startDate: new Date(2020, 10, 5),
        endDate: new Date(2020, 10, 8)
      }
    ]);
  }
}

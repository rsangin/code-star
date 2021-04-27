import { Component, OnInit } from '@angular/core';
import { Tour } from './models/tour';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  public tours: Tour[] = [{
    description: `تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.`,
    image: './assets/images/bg2.jpg',
    price: 2400000,
    title: 'تور 1'
  }, {
    description: `تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.`,
    image: './assets/images/bg3.jpg',
    price: 3400000,
    title: 'تور 2'
  }, {
    description: `تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.`,
    image: './assets/images/bg4.jpg',
    price: 2800000,
    title: 'تور 3'
  }, {
    description: `تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.
    تور تهران مشهد با هتل درویش.`,
    image: './assets/images/bg5.jpg',
    price: 1800000,
    title: 'تور 4'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

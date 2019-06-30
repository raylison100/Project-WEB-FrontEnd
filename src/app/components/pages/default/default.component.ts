import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class DefaultComponent implements OnInit {

  images = [1, 2, 3,4,5,6,7,8,9].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  shared: SharedService;

  constructor() { 
    this.shared = SharedService.getInstance()
  }

  ngOnInit() {

  }

}

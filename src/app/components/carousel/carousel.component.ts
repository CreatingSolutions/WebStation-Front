import {Component, Input, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input() title: string;
  @Input() description: string;
  images = [1, 2, 3].map(
    () => `https://picsum.photos/1024/1024?random&t=${Math.random()}`
  );

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.title = 'Pack par défaut';
    this.description = 'Description';
  }
}

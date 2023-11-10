import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-commonservice',
  templateUrl: './commonservice.component.html',
  styleUrls: ['./commonservice.component.scss']
})
export class CommonserviceComponent implements OnInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 2, all: 0 },
    slide: 3,
    interval: {timing: 4000, initialDelay: 500},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [
    {
      img:"../../assets/main/locksmith.webp",
      text:"Αλλαγές κλειδαριών",
      desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"
    },
    {
      img:"../../assets/main/car-locksmith.webp",
      text:"Αυτοκίνητα-Μηχανές",
      desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"
    },
    {
      img:"../../assets/main/keys.webp",
      text:"Αντίγραφα κλειδιών",
      desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }



}

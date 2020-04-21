import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [62, 83, 466, 965, 982, 1043].map((n) => `https://picsum.photos/id/${n}/2000/400`);


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;



 

  constructor() { }

  ngOnInit() {
  }

}

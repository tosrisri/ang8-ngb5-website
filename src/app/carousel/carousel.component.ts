import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [62, 83, 466, 965, 982, 1043].map((n) => `https://picsum.photos/id/${n}/2000/500`);
  k = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vehicula nulla.",
  "Suspendisse pellentesque ex a enim ornare pharetra. ",
  "Fusce ac posuere nulla. Aliquam non neque ut diam blandit rutrum sed at lectus.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Fusce libero eros, varius sit amet lorem sed, sagittis dignissim neque.",
  "Quisque cursus mauris ac urna mollis ornare tempor dictum elit. Morbi mattis vehicula purus in ullamcorper. Donec ornare vulputate lectus, ut finibus velit venenatis eu."
];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

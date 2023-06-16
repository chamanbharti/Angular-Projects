import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent  implements OnChanges{
  @Input()
  rating = 0;
  cropWidth = 75;
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {

    this.cropWidth = this.rating * 75 / 5;
    console.log('cropWidth:'+this.cropWidth);
  }
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    console.log('clicked:star compoennt');
  }

}

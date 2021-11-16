import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.scss']
})
export class RatingViewComponent implements OnInit {
  faStar= faStar;
  constructor() { }

  ngOnInit(): void {
  }

}

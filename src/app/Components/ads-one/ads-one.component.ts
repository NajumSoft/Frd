import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ads-one',
  templateUrl: './ads-one.component.html',
  styleUrls: ['./ads-one.component.scss']
})
export class AdsOneComponent implements OnInit {

  constructor() { }
 @Input('myObj') any;


  ngOnInit(): void {
   


  }

}

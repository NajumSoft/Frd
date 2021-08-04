import { Component, OnInit } from '@angular/core';
import { CenterService } from 'src/Services/center.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private _services:CenterService) { }

  listi=[];
  ngOnInit(): void {

    this.listi = this._services.detailViewData;
    console.log(this.listi);

  }
  trans(i){
this._services.TransferData(i);
  }

}

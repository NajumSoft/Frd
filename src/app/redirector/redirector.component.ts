import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirector',
  templateUrl: './redirector.component.html',
  styleUrls: ['./redirector.component.scss']
})
export class RedirectorComponent implements OnInit {

  constructor(public _roter:Router) { }

  ngOnInit(): void {
    let i = this._roter.url;
    let j = i.split('/');
    console.log(j[1]);
  }

}

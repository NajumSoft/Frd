import { Component, OnInit } from '@angular/core';
import { CenterService } from 'src/Services/center.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router,ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  softList=[];
  bookList=[];
  gameList=[];
  Dami= [];
  constructor(private _services:CenterService, private afs:AngularFirestore,private _route:Router,private actroute:ActivatedRoute,public title:Title,public meta:Meta) { }

  ngOnInit(): void {

    //this._services.GetLandingData().subscribe(d=> console.log(d));
    this.title.setTitle('Free Download | Softwares | Books');
    this.afs.collection('freedownlaods247',ref => ref.where('categories',"==","Softwares")).valueChanges().subscribe(d=>this.softList = d);
    this.afs.collection('freedownlaods247',ref => ref.where('categories',"==","Books")).valueChanges().subscribe(d=>this.bookList = d);
    this.afs.collection('freedownlaods247',ref => ref.where('categories',"==","Games")).valueChanges().subscribe(d=>this.gameList = d);
   this.meta.updateTag({name:"description",content:"Looking to download safe free versions of the latest software, freeware, shareware and demo programs from a reputable download site? Visit freedownloads247 today."});
   console.log(this._route.url);
  

  }
  viewDetail(d){
    console.log(d);
    this._services.TransferData(d);
    this._route.navigate(['/detail']);
  
  }


  
 

}

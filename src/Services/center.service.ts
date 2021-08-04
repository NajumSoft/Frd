import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ok } from 'assert';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  detailViewData;
  s = new Subject();
  e = new Subject();
  constructor(private afsDb:AngularFirestore,private _route:Router,public title:Title,public meta:Meta) { }

  GetLandingData(){
     let Data = this.afsDb.collection('freedownlaods247').valueChanges()
    
    
    return Data;
    
  }
  whatIShow():Observable<any>{
 

      this._route.navigate(['/detail']);

console.log(this.detailViewData);
return this.detailViewData;

}
  TransferData(d){
  this.title.setTitle(d.appName +"Free"+""+"" + "Download");
  this.meta.updateTag({name:'description',content:d.appName+d.version});

this.detailViewData =d ;
console.log(this.detailViewData);
this.whatIShow();
  }
  async SearchData(d){

      console.log('searching Start.....');
   // await  this.afsDb.collection('freedownlaods247',ref=>ref.where('appName','==',d)).valueChanges().subscribe(d=> {
      await  this.afsDb.collection('freedownlaods247',ref => 
      ref
      .orderBy('appName','asc')
      .startAt(d)
      .endAt(d+'\uf8ff')
       ).valueChanges()
       .subscribe(d=> {    
      this.detailViewData = d; 
 
     // console.log(this.detailViewData);
 
      if (typeof this.detailViewData === 'undefined') {
      
        this._route.navigate(['/landingPage']);

      }

      if (this.detailViewData.length > 0){
    
      this._route.navigate(['/result']);

      console.log('its > 0');
   }
   


    
      
    });
     
    
     
      }
}

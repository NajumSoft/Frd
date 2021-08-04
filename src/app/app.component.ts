import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TestComponentComponent } from './Components/test-component/test-component.component';
import { withModule } from '@angular/core/testing';
import { getLocaleDateTimeFormat } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { CenterService } from 'src/Services/center.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(TestComponentComponent) importComponent:TestComponentComponent;
  searchData =null;
  title = 'amChart';
  constructor(private _services:CenterService,private _router:Router) {}


  search(){

  
    this.searchData =  this.searchData.toLowerCase();
   if(this.searchData != null){
    this._services.SearchData(this.searchData);
    console.log('its not null');
     this._router.navigate(['/landingPage']);
   }
   
   if(this.searchData == null){
    console.log('its  null');
    this._router.navigate(['/landingPage']);

   }

  }
  alert(){
    alert();
  }
  ngOnInit(){
   //  console.log("this is home component")
  //  console.log(this.importComponent);

  }

ngAfterViewInit(){
 // console.log('its afteroninit');
}

}

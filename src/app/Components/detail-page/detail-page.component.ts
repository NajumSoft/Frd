import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CenterService } from 'src/Services/center.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  data;
  constructor(private _services:CenterService, private afs:AngularFirestore,private _route:Router) { }

  
  adSend:string = 'welcome Saif Afridi';
   ngOnInit(): void {

     this.GetData();
    
 
  }
  async GetData()
  {
    
    this.data = await this._services.detailViewData;
   if(this.data == undefined)
   {
     this._route.navigate(['/landingPage']);
     console.log(';')
   }

  
  }

  slideData = [
    {

      name: "../../../assets/Images/Screen Shots/Bittorrent/bittorrent-screenshot (1).png",
    }, {

      name: "../../../assets/Images/Screen Shots/Bittorrent/bittorrent-screenshot (2).png",
    }, {
   
      name: "../../../assets/Images/Screen Shots/Bittorrent/bittorrent-screenshot.png",
    }, 

  ]

  config: SwiperOptions = {
    pagination: { 
      el: 'null',
      type: 'bullets',
       clickable: true
       
      
      },
    //  spaceBetween: 50,
      centeredSlides: true,
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      900: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }},
 
    navigation: {
      nextEl: 'null',
      prevEl: 'null'
    },
    loop: true
  };
  
  QuickViewConfig: SwiperOptions = {
    pagination: { 
      el: 'null',
      type: 'bullets',
       clickable: true
       
      
      },
      slidesPerView: 4,
      //centeredSlides: true,
     spaceBetween: 20,
      //centeredSlides: true,
    autoHeight: true,
    allowTouchMove: true,
    autoplay:false,
    // autoplay: {
    //   delay: 6000000,
    //   disableOnInteraction: true
    // },

 
    navigation: {
      nextEl: 'null',
      prevEl: 'null'
    },
    loop: false
  };
  download(){
    // this._route.navigate([this.data.downloadLink]);
    window.open(this.data.downloadLink);
  }
}

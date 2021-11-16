

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';



import { AdsOneComponent } from './Components/ads-one/ads-one.component';
import { AdsTwoComponent } from './Components/ads-two/ads-two.component';
import { DetailPageComponent } from './Components/detail-page/detail-page.component';



import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';

import{ReactiveFormsModule} from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { ResultsComponent } from './Components/results/results.component';
import { NewsComponent } from './news/news.component';
import { MobiZoneComponent } from './Components/mobi-zone/mobi-zone.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RedirectorComponent } from './redirector/redirector.component';
import {MatSelectModule} from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingViewComponent } from './Components/rating-view/rating-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsOneComponent,
    AdsTwoComponent,
    DetailPageComponent,
    LandingPageComponent,
    SignInComponent,
    TestComponentComponent,
    SearchPageComponent,
    ResultsComponent,
    NewsComponent,
    MobiZoneComponent,
    RedirectorComponent,
    RatingViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSelectModule,
    
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FontAwesomeModule,

  ],
  providers: [AngularFirestore,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

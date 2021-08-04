import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsOneComponent } from './Components/ads-one/ads-one.component';
import { AdsTwoComponent } from './Components/ads-two/ads-two.component';
import { AppComponent } from './app.component';
import { DetailPageComponent } from './Components/detail-page/detail-page.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { TestComponentComponent } from './Components/test-component/test-component.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { ResultsComponent } from './Components/results/results.component';
import { NewsComponent } from './news/news.component';
import { MobiZoneComponent } from './Components/mobi-zone/mobi-zone.component';
import { RedirectorComponent } from './redirector/redirector.component';


const routes: Routes = [
  { path: '',   redirectTo: '/landingPage', pathMatch: 'full' }, // redirect to `first-component`
   {path:'',component:RedirectorComponent},
   {path:'re',component:RedirectorComponent},
  {path:'adsOne',component:AdsOneComponent},
  {path:'adsTwo',component:AdsTwoComponent},
  {path:'detail',component:DetailPageComponent},
  {path:'landingPage',component:LandingPageComponent},
  {path:'searchPage',component:SearchPageComponent},
    {path:'signIn',component:SignInComponent},
    {path:'test',component:TestComponentComponent},
    {path:'result',component:ResultsComponent},
    {path:'news',component:NewsComponent},
    {path:'mobi',component:MobiZoneComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserDetail } from 'src/Models/user-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:UserDetail;
  constructor(
    private afAuth:AngularFireAuth,

  ) { }
  isLogin():boolean{
    if(this.userData.uId != null)
   { return true;}
 
  else{
    return false
  }
}
  getUserDetail(){
     return this.userData;
  }
  setUserDetail(uid,email,emailverified,displayname){
    let i =  new UserDetail();
    i.uId = uid;
    i.email = email;
    i.emailVerified = emailverified;
    i.displayName = displayname;
    this.userData = i;
 }








}

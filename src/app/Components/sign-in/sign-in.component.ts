import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private gauth:AngularFireAuth) { }

  ngOnInit(): void {
  }
  googleauth(){
    console.log(this.gauth.signInWithPopup(new auth.GoogleAuthProvider()));
    
  }

}

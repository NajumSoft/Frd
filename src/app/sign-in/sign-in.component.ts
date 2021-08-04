import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Shard/auth.service';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide;
  formIsValid;
  status;
  constructor(
    private _authService:AuthService,
    private formBuilder: FormBuilder,
    private afAuth:AngularFireAuth,
   
    private router:Router) { }
  loginForm:FormGroup;
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    

     });
  }

  async login(){
    
    await this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password).then(res=> {
      this.status = res.operationType;
       console.log(res);
       this._authService.setUserDetail(res.user.uid,res.user.email,res.user.emailVerified,res.user.displayName);
    })
    
    .catch(error=> this.status = error.message)
    if(this.status == 'signIn'){this.router.navigate(['/dashboard'])}
 
  }
async loginFromGoogle(){
    // await this.afAuth.sin
}
}

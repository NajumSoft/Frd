import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Shard/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  passwordconfirmValid = false;
  hide;
  formIsValid;
  status;

  constructor(
    private _authService:AuthService,
    private formBuilder: FormBuilder,
    private afAuth:AngularFireAuth,
    private router:Router) { }
  registerForm:FormGroup;
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6)]],


     });
  }

  async register(){
    
    localStorage.setItem('statup','this is from localstorage');

    if(this.registerForm.value.password == this.registerForm.value.confirmPassword)
    {
      this.passwordconfirmValid = false;
      await this.afAuth.createUserWithEmailAndPassword(this.registerForm.value.email,this.registerForm.value.password).then(res=> {
        this.status = res.operationType;
         console.log(res);
         this._authService.setUserDetail(res.user.uid,res.user.email,res.user.emailVerified,res.user.displayName);
      }).catch(error=> this.status = error.message)
    if(this.status == 'signIn'){this.router.navigate(['/dashboard'])}
    }

    else{
       this.passwordconfirmValid = true;
       console.log(this.passwordconfirmValid);
    }
    
  }
}
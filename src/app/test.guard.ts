import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Shard/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(private _auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      console.log('you have no permission')
    return this._auth.isLogin();
  }
  
}

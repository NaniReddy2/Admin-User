import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptyGuard implements CanActivate {
role:any
  constructor(private router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.role=localStorage.getItem('role');
    if(this.role == ''){
      alert("your not access this page");
      this.router.navigate(['login']);
      return false;
    }
    else{
      return true;
    }
  }
}

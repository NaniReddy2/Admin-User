import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate {
 role:any
  constructor(private router:Router){}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.role=localStorage.getItem('role');
    if(this.role == 'admin')
    return true;

    else{
      alert(' you are not authorized ');
      return false;
    }
  }

}

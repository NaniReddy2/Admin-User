import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginClass } from '../models/loginclass';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=utf-8',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public users:any[]=[];
  // validateUser(userName: any, password: any){
  //   var i :any;
  //   for(i=0; i<this.users.length; i++){
  //     if(this.users[i].userName==userName &&
  //        this.users[i].passeord==password){
  //          return this.users[i].selectuser;
  //        }
  //   }
  //   return 'failed';
  // }
  baseURL:string= 'http://saapi.azaz.com/api';
  url:string='http://saapi.azaz.com/api/UserDetails/GetUserbyId';
  URL:string=' http://saapi.azaz.com/api/UserDetails/SaveUser';
  myurl:string='http://saapi.azaz.com/api/Roles/GetRoles';
  MYURL:string='http://saapi.azaz.com/api/Roles/SaveRoles'

  constructor(private http:HttpClient) { }
  login(model:LoginClass){
    const headersValue={
      headers:new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this.http.post(this.baseURL+'/login',model,headersValue)
  }

  getUserbyId(obj:any){
    return this.http.post(
      this.url,
      JSON.stringify(obj),
      headersData
    );
  }
  SaveUser(obj1:any){
    return this.http.post(
      this.URL,
      JSON.stringify(obj1),
      headersData
    )
  }
 SaveRoles(obj2:any){
    return this.http.post(
      this.MYURL,
      JSON.stringify(obj2),
      headersData
    )
  }
  GetRoles(obj3:any){
    return this.http.post(
     this.myurl,
     JSON.stringify(obj3),
     headersData
    )
  }
}

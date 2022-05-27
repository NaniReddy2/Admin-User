import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=utf-8',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  url:string='http://saapi.azaz.com/api/UserDetails/GetUserbyId';
  myurl:string='http://saapi.azaz.com/api/Roles/GetRoles';
  constructor(private http:HttpClient) { }

  UserList(obj4:any){
    return this.http.post(
      this.url,
      JSON.stringify(obj4),
      headersData
    )
  }
  RoleList(obj5:any){
   return this.http.post(
     this.myurl,
     JSON.stringify(obj5),
     headersData
   )
  }

}

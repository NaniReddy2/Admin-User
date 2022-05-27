import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=utf-8',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class EditdataService {
   url:string='http://saapi.azaz.com/api/UserDetails/GetUserbyId';
   myurl:string='http://saapi.azaz.com/api/UserDetails/SaveUser'
  constructor(private http:HttpClient) { }

EditProfile(obj:any){
  return this.http.post(
    this.url,
    JSON.stringify(obj),
    headersData
  );
}
deleteUser(id:any){
  return this.http.post(
    this.myurl,
    JSON.stringify(id),
    headersData
  );
}
}



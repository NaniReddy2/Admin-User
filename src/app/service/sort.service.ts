import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private http:HttpClient) { }

  getAllUsers(obj:any)
  {
    return this.http.post('http://saapi.azaz.com/api/UserDetails/GetUserbyId',obj);
  }
  // getAllRoles(obj:any){
  //   return this.http.post('http://saapi.azaz.com/api/Roles/GetRoles',)
  // }
}

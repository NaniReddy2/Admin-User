import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { LoginService } from 'src/app/service/login.service';
import { SortService } from 'src/app/service/sort.service';
import { EditdataService } from 'src/app/service/editdata.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    userlist:any;
    p: number = 1;
    searchText: string ='';
  deleteuser: any;

  constructor(private getdataservice:GetdataService,
              private actroute:ActivatedRoute,
              private loginservice:LoginService,
              private sortservice:SortService,
              private editservice:EditdataService) { }

  ngOnInit(): void {
  this.UserList();
 // this.EditProfile();
  }

  UserList(){
    const obj4={
      "userId": 0
    }
    this.getdataservice.UserList(obj4)
    .subscribe((res)=>{
      console.log(res);
      this.userlist=res;
    })
 }

EditProfile(x:any){
     var id=this.actroute.snapshot.paramMap.get('id')
    //  console.log(id)
   const obj={
    "action": "D",
    "user_Id": id ,
    "user_Firstname":"",
    "user_Lastname": "",
    "user_Phone": "",
    "user_Email":"",
    "user_Address":"",
    "user_Mapaddresslink":"",
    "user_Username":"",
    "uE_Password": "",
    "user_Profileimage":"",
    "user_Roleid": 0,
    "user_IsAdmin":"",
    "user_Type":"",
    "user_Status": "D",
    "user_Created_Userid":1,
   }
    console.log(obj)
   this.editservice.deleteUser(x)
   .subscribe(res=>{
     this.deleteuser=res
     if(this.deleteuser){
       alert('User Successfully Deleted')
     }
   })
}

// deleteUser(x:any){
//   this.editservice.deleteUser(x.user_Id)
//   .subscribe(res=>{
//    console.log(res)
//   })
// }
}

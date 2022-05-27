import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditdataService } from 'src/app/service/editdata.service';
import { GetdataService } from 'src/app/service/getdata.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  userdata:any;
  savedata: any;

  constructor(private actroute:ActivatedRoute,private route:Router,private formbuilder:FormBuilder,
              private getdataservice:GetdataService,private loginservice:LoginService,private editdata:EditdataService) { }

  ngOnInit(): void {
this.EditProfile();

  }
  editform=this.formbuilder.group({
    fname:[''],
    lname:[''],
    mobile:[''],
    email:[''],
    address:[''],
    mapAddressLink:[''],
    user_name:[''],
    user_pass:[''],
    user_Profileimage:[''],
    isAdmin:[''],
    type:[''],
    user_status:[''],
    user_role:[''],
  })
  editForm=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    mapAddressLink:new FormControl(''),
    user_name:new FormControl(''),
    user_pass:new FormControl(''),
    user_Profileimage:new FormControl(''),
    isAdmin:new FormControl(''),
    type:new FormControl(''),
    user_status:new FormControl(''),
    user_role:new FormControl(''),
  })

  EditProfile(){
    // console.log(this.actroute.snapshot.params)
    var id=this.actroute.snapshot.paramMap.get('id');
    console.log(id)
    const obj6={
      "userId": id ,
    }
    console.log(obj6);
    this.getdataservice.UserList(obj6)
    .subscribe((res:any)=>{

      this.userdata=res;
       console.log(this.userdata);
       console.log(this.userdata[0].user_Firstname);

      this.editForm.controls["fname"].setValue(this.userdata[0].user_Firstname);
      this.editForm.controls["lname"].setValue(this.userdata[0].user_Lastname);
      this.editForm.controls["mobile"].setValue(this.userdata[0].user_Phone);
      this.editForm.controls["email"].setValue(this.userdata[0].user_Email);
      this.editForm.controls["address"].setValue(this.userdata[0].user_Address);
      this.editForm.controls["mapAddressLink"].setValue(this.userdata[0].user_Mapaddresslink);
      this.editForm.controls["user_name"].setValue(this.userdata[0].user_Username);
      this.editForm.controls["user_pass"].setValue(this.userdata[0].uE_Password);
      this.editForm.controls["user_Profileimage"].setValue(this.userdata[0].user_Profileimage);
      this.editForm.controls["isAdmin"].setValue(this.userdata[0].user_IsAdmin);
      this.editForm.controls["type"].setValue(this.userdata[0].user_Type);
      this.editForm.controls["user_status"].setValue(this.userdata[0].user_Status);
      this.editForm.controls["user_role"].setValue(this.userdata[0].user_Role);
    })
  }

  SaveUser(){

     var userId=this.actroute.snapshot.paramMap.get('id');
       console.log(userId)
    const obj1={
      "action": "U",
      "user_Id": userId ,
      "user_Firstname":this.editForm.value.fname,
      "user_Lastname": this.editForm.value.lname,
      "user_Phone": this.editForm.value.mobile,
      "user_Email":this.editForm.value.email,
      "user_Address":this.editForm.value.address,
      "user_Mapaddresslink":this.editForm.value.mapAddressLink,
      "user_Username":this.editForm.value.user_name,
      "uE_Password": this.editForm.value.user_pass,
      "user_Profileimage":this.editForm.value.user_Profileimage,
      "user_Roleid": 1,
      "user_IsAdmin":this.editForm.value.isAdmin,
      "user_Type":this.editForm.value.type,
      "user_Status": "Y",
      "user_Created_Userid":1,
    }

        console.log(obj1)

    this.loginservice.SaveUser(obj1)
    .subscribe(res=>{
    console.log (res)
        // this.savedata=res
      //  console.log(this.savedata)
      if(res==1){
      alert('Updated Successfull');
           this.route.navigate(['admin/user-view']);
        }
        else  if(res==2){
          alert('Not Updated')
        }
    });
  }

}

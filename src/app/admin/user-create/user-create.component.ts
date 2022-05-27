import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  // url:string ='';
  // selectImage:any;

  constructor(private loginservice:LoginService,private formbuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  userForm=this.formbuilder.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    mobile:['',Validators.required],
    email:['',Validators.required],
    address:['',Validators.required],
    mapAddressLink:['',Validators.required],
    user_name:['',Validators.required],
    user_pass:['',Validators.required],
    user_Profileimage:['',Validators.required],
    isAdmin:['',Validators.required],
    type:['',Validators.required],
    user_status:['',Validators.required],
    user_role:['',Validators.required],
  })

  // selectFile(event:any){
  //   if(event.target.files && event.target.files[0]){
  //      var reader=new FileReader()
  //      reader.onload=(event:any)=> this.url=event.target.result;
  //      reader.readAsDataURL(event.target.files[0]);
  //      this.selectImage=event.target.files[0];
  //   }
  // }
  SaveUser(){
    // console.log('my value is',this.userForm.value.fname);
    // console.log('my value is',this.userForm.value.lname);
  const obj1={
    "action": "A",
    "user_Id": 0,
    "user_Firstname":this.userForm.value.fname,
    "user_Lastname": this.userForm.value.lname,
    "user_Phone": this.userForm.value.mobile,
    "user_Email": this.userForm.value.email,
    "user_Address": this.userForm.value.address,
    "user_Mapaddresslink":this.userForm.value.mapAddressLink,
    "user_Username": this.userForm.value.user_name,
    "uE_Password": this.userForm.value.user_pass,
    "user_Profileimage":"",
    "user_Roleid": 2,
    "user_IsAdmin": this.userForm.value.isAdmin,
    "user_Type":this.userForm.value.type,
    "user_Status": "Y",
    "user_Created_Userid":1,

  }
  this.loginservice.SaveUser(obj1)
  .subscribe(res=>{
    console.log(res)
    if(res == 1){
      alert('new user added successfully');
       this.router.navigate(['admin/user-details']);
      }
      else{
        alert('user not added')
      }
  });

  }

  // onUpload(){
  //  const filedata=new FormData();
  //  filedata.append('image',this.selectImage,this.selectImage.name);
  //  this.http.post('../assets/',filedata)
  //  .subscribe(res=>{
  //    console.log(res);
  //  })
  // }

}

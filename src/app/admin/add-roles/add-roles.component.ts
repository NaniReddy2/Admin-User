import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

  constructor(private loginservice:LoginService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  roleForm=this.formbuilder.group({

    rolename:['',Validators.required],
    roletype:['',Validators.required],
    roleuniqid:['',Validators.required],
    rolestatus:['',Validators.required],
  })
  SaveRoles(){
    const obj2={
      "action": "A",
      "role_Id": 0,
      "role_Name": this.roleForm.value.rolename,
      "role_Type": this.roleForm.value.roletype,
      "role_Uniqid": this.roleForm.value.roleuniqid,
      "role_Status": this.roleForm.value.rolestatus,
      "role_Created_UserId": 1,
    }
    this.loginservice.SaveRoles(obj2)
    .subscribe(res=>{
      console.log(res)
      if(res==1){
        alert('new role added');
        // this.router.navigate(['admin']);
      }
      else if(res==2){
        alert('Role already added');
        // this.router.navigate(['admin']);
      }
      else{
        alert('role not added');
      }
    });
  }
}

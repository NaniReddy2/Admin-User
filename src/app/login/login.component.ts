import { Component, OnInit } from '@angular/core';
import { LoginClass } from '../models/loginclass';
import { LoginService } from '../service/login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userType:any;
  userId:any;
  userinfo:any;
  userInput:any;
  passwordInput:any;

  constructor(private loginservice:LoginService,private router:Router,private formbuilder:FormBuilder) { }


  ngOnInit(): void {

  }
  loginForm=this.formbuilder.group({
    userName:[''],
    password:['']
  })
login(){
  const loginClass=new LoginClass (this.loginForm.controls['userName'].value,
                                   this.loginForm.controls['password'].value);
  this.loginservice.login(loginClass)
  .subscribe((res:any)=>{
    console.log(res);
    if(res==''){
      alert('Login Failed')
    }
    else {
      alert('Login successfull');
      this.userId=res[0].userId;
      console.log(this.userId);
      this.getUserById(this.userId)
      
      this.loginForm.reset();

      //  this.router.navigate(['user/edit2-details']);
        this.router.navigate(['admin']);
    }
  })
   localStorage.setItem('role',this.loginForm.controls['userName'].value)

  sessionStorage.setItem('role',this.loginForm.controls['userName'].value)
}
getUserById(input:any){
   const obj={
     "userId":input
   }
   this.loginservice.getUserbyId(obj)
   .subscribe((res:any)=>{
     console.log(res);

   })
}

}

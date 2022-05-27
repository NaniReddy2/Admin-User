import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { SortService } from 'src/app/service/sort.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
 rolelist:any;
 p:number=1;
 searchText:string='';
//  obj={
//    "row":0
//  }
//  allData:any=[];

  constructor(private getdataservice:GetdataService,private sortservice:SortService) { }

  ngOnInit(): void {
    // this.sortservice.getAllUsers(this.obj)
    //  .subscribe((data:any)=>{
    //    this.allData=data;
    //  })
    this.RoleList();
  }
     RoleList(){
       const obj5={
       "expression": "",
        "sortby": "",
        "rowno": 0
       }
       this.getdataservice.RoleList(obj5)
       .subscribe((res:any)=>{
         console.log(res);
         this.rolelist=res
       })
     }
















     
}

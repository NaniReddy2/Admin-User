import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmGuard } from '../guards/adm.guard';
import { EmptyGuard } from '../guards/empty.guard';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { AdminComponent } from './admin.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

import { RolesComponent } from './roles/roles.component';
import { UserCreateComponent } from './user-create/user-create.component';

import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{ path: '', component: AdminComponent},
                        {path:'add-roles',component:AddRolesComponent ,canActivate:[AdmGuard]},
                        {path:'edit-datails/:id',component:EditDetailsComponent ,canActivate:[AdmGuard]},
                        {path:'roles',component:RolesComponent ,canActivate:[AdmGuard]},
                        {path:'user-add',component:UserCreateComponent ,canActivate:[AdmGuard]},
                        {path:'user-view',component:UserListComponent ,canActivate:[AdmGuard]},
                        {path:'edit-role',component:EditRoleComponent,canActivate:[AdmGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

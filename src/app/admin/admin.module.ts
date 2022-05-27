import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { UserCreateComponent } from './user-create/user-create.component';
import { RolesComponent } from './roles/roles.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from '../directive/sort.directive';
import { SearchFilterPipe } from '../pipe/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditRoleComponent } from './edit-role/edit-role.component';


@NgModule({
  declarations: [
    AdminComponent,

    UserCreateComponent,
    RolesComponent,
    UserListComponent,
    AddRolesComponent,
    EditDetailsComponent,
    SortDirective,
    SearchFilterPipe,
    EditRoleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],

})
export class AdminModule { }

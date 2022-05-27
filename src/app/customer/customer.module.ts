import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ViewCustComponent } from './view-cust/view-cust.component';
import { AddCustComponent } from './add-cust/add-cust.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';


@NgModule({
  declarations: [
    CustomerComponent,
    ViewCustComponent,
    AddCustComponent,
    EditCustComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

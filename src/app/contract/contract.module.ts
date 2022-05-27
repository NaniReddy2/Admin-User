import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { ViewContComponent } from './view-cont/view-cont.component';
import { AddContComponent } from './add-cont/add-cont.component';
import { EditContComponent } from './edit-cont/edit-cont.component';


@NgModule({
  declarations: [
    ContractComponent,
    ViewContComponent,
    AddContComponent,
    EditContComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }

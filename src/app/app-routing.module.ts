import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyGuard } from './guards/empty.guard';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[EmptyGuard]  },
                        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
                        { path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
                        { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
                        { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

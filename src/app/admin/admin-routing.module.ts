import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { SearchvehicleComponent } from './searchvehicle/searchvehicle.component';
import { ViwemoreComponent } from './viwemore/viwemore.component';

const routes: Routes = [
  {path:'adminsidenav/dashboard',component:DashboardComponent},
  {path:'adminsidenav/companyinfo',component:CompanyinfoComponent},
  {path:'adminsidenav/searchvehicle',component:SearchvehicleComponent},
  {path:'adminsidenav/manageaccount',component:ManageaccountComponent},
  {path:'adminsidenav/companyinfo/viwemore',component:ViwemoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

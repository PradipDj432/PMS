import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { ChargesComponent } from './charges/charges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrintslipComponent } from './printslip/printslip.component';
import { ViwebookingComponent } from './viwebooking/viwebooking.component';

const routes: Routes = [
  {path:'watchmansidenav/dashboard',component:DashboardComponent},
  {path:'watchmansidenav/addbooking',component:AddbookingComponent},
  {path:'watchmansidenav/viwebooking',component:ViwebookingComponent},
  {path:'watchmansidenav/charges',component:ChargesComponent},
  {path:'watchmansidenav/printslip',component:PrintslipComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchmanRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { Booking1Component } from './booking1/booking1.component';
import { Booking2Component } from './booking2/booking2.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViwebookingComponent } from './viwebooking/viwebooking.component';

const routes: Routes = [
  {path:'usersidenav/dashboard',component:DashboarduserComponent},
  {path:'usersidenav/editprofile',component:EditprofileComponent},
  {path:'usersidenav/viwebooking',component:ViwebookingComponent},
  {path:'usersidenav/booking',component:Booking1Component},
  {path:'usersidenav/bookingconfirm',component:Booking2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

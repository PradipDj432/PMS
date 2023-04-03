import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcompanyComponent } from './dashboardcompany/dashboardcompany.component';
import { EditprofilecompanyComponent } from './editprofilecompany/editprofilecompany.component';
import { ReportcompanyComponent } from './reportcompany/reportcompany.component';

const routes: Routes = [
  {path:"companysidenav/companydashboard",component:DashboardcompanyComponent},
  {path:"companysidenav/companyreport",component:ReportcompanyComponent},
  {path:"companysidenav/companyeditprofile",component:EditprofilecompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

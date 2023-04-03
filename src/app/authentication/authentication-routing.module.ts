import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../admin/sidenav/sidenav.component';
import { SidenavcompanyComponent } from '../company/sidenavcompany/sidenavcompany.component';
import { UsersidenavComponent } from '../user/usersidenav/usersidenav.component';
import { SidenavComponent1 } from '../watchman/sidenav/sidenav.component';
import { CompanyregistrationComponent } from './companyregistration/companyregistration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path:'companyregistration',component:CompanyregistrationComponent},
  {path:'userregistration',component:UserregistrationComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'usersidenav',component:UsersidenavComponent},
  {path:'companysidenav',component:SidenavcompanyComponent},
  {path:'watchmansidenav',component:SidenavComponent1},
  {path:'adminsidenav',component:SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

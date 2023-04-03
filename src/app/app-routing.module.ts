import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'authentication', loadChildren: () => AuthenticationModule }
  // {path: './authentication/login',component:LoginComponent}
  // {path: 'authentication',children:[{ path: '', redirectTo: '/home', pathMatch: 'full' },
  //                                   {path:'', component: LoginComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

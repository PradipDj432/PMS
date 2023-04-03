import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}
   getdashboard()
   {
    this.router.navigate(['adminsidenav/dashboard'])
   }
   getsearchvehical()
   {
    this.router.navigate(['adminsidenav/searchvehicle'])
   }
   getmanageaccount()
   {
    this.router.navigate(['adminsidenav/manageaccount'])
   }
   getcompanyinfo()
   {
    this.router.navigate(['adminsidenav/companyinfo'])
   }
}

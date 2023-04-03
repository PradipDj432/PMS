import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardcompany',
  templateUrl: './dashboardcompany.component.html',
  styleUrls: ['./dashboardcompany.component.css']
})
export class DashboardcompanyComponent {
   constructor(private router:Router){}
   getdashboard()
   {
    this.router.navigate(['companysidenav/companydashboard'])
   }
   getreports()
   {
    this.router.navigate(['companysidenav/companyreport'])
   }
   geteditprofile()
   {
    this.router.navigate(['companysidenav/companyeditprofile'])
   }
}

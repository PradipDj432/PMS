import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportcompany',
  templateUrl: './reportcompany.component.html',
  styleUrls: ['./reportcompany.component.css']
})
export class ReportcompanyComponent {
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

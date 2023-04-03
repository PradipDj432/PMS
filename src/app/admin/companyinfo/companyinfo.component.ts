import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent {
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

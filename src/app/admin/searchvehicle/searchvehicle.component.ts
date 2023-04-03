import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchvehicle',
  templateUrl: './searchvehicle.component.html',
  styleUrls: ['./searchvehicle.component.css']
})
export class SearchvehicleComponent {
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

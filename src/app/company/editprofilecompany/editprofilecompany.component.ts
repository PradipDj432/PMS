import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofilecompany',
  templateUrl: './editprofilecompany.component.html',
  styleUrls: ['./editprofilecompany.component.css']
})
export class EditprofilecompanyComponent {
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

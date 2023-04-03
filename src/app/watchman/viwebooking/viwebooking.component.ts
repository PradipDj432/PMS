import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viwebooking',
  templateUrl: './viwebooking.component.html',
  styleUrls: ['./viwebooking.component.css']
})
export class ViwebookingComponent {
  constructor(private router:Router){}
  getdashboard()
   {
    this.router.navigate(['watchmansidenav/dashboard'])
   }
   getprintslip()
   {
    this.router.navigate(['watchmansidenav/printslip'])
   }
   getviwebooking()
   {
    this.router.navigate(['watchmansidenav/viwebooking'])
   }
   getaddbooking()
   {
    this.router.navigate(['watchmansidenav/addbooking'])
   }
   getcharges()
   {
    this.router.navigate(['watchmansidenav/charges'])
   }
}

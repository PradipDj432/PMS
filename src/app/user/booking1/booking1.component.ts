import { Component,OnInit,NgModule,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrls: ['./booking1.component.css']
})

export class Booking1Component {
  companyname:string="Company1"
  constructor(private router: Router){}
  getdashboard()
  {
    this.router.navigate(['usersidenav/dashboard'])
  }
  getviwebooking()
  {
    this.router.navigate(['usersidenav/viwebooking'])
  }
  geteditprofile()
  {
    this.router.navigate(['usersidenav/editprofile'])
  }
  spots=[1,2,9,7,8,11,13,16,17]
  status=false
  bookinginfo(into:any)
  {
    this.status=true
  }
  getselectedspot()
  {
    this.router.navigate(['usersidenav/bookingconfirm'])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking2',
  templateUrl: './booking2.component.html',
  styleUrls: ['./booking2.component.css']
})
export class Booking2Component {
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

  companyname="company1"
  entrytime="10:00 AM"
  exittime="11:00 AM"
  vehicletype="Four Wheeler"
  done = ""
  bookingconfirm(infofinal:any)
  {
    this.done = "Your Booking is Confirm !!!!"
  }
}

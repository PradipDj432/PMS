import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersidenavComponent } from '../usersidenav/usersidenav.component';
@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent {
  boxes=['company1','company2','company3','company4','company5']
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
  navigateTobooking1()
  {
    this.router.navigate(['usersidenav/booking'])
  }
}

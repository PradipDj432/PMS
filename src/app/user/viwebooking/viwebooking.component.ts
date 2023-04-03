import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viwebooking',
  templateUrl: './viwebooking.component.html',
  styleUrls: ['./viwebooking.component.css']
})
export class ViwebookingComponent {
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
}

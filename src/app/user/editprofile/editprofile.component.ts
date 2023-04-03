import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
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

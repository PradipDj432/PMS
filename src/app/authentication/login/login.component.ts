import { Component,OnInit,NgModule,ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  options = ['User', 'Watchman', 'Company','Admin'];
  selectedOption:string='User'; 
  regioptions = ['Select Role','User','Company'];
  status=false
  valid:string=''
  constructor(private shared: SharedService,private router: Router){}
  
  printSelectedOption(so: any) {
    console.warn(so);
    if(so.password=='test' && so.email=='test@gmail.com')
    {
    this.selectedOption=so.role;
    // this.shared.setMessage(this.selectedOption);
      if(this.selectedOption=='User')
      {
        this.router.navigate(['/usersidenav']);
      }
      else if(this.selectedOption=='Admin')
      {
        this.router.navigate(['/adminsidenav'])
      }
      else if(this.selectedOption=='Company')
      {
        this.router.navigate(['/companysidenav'])
      }
      else if(this.selectedOption=='Watchman')
      {
        this.router.navigate(['/watchmansidenav'])
      }
    }
    else
    {
        this.valid="Enter valid username and password";
    }
  }
  getregistration()
  {
    this.status=true
  }
  setregistration(type:string)
  {
    console.warn(type);
    
     if(type=='Company')
     {
      this.router.navigate(['/companyregistration']);
     }
     else if(type=='User'){
      this.router.navigate(['/userregistration']);
     }
  }
  getpassword()
  {
    this.router.navigate(['/forgetpassword'])
  }
  

}

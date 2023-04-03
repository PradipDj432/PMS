import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule} from './admin/admin.module';
import { WatchmanModule } from './watchman/watchman.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { AuthenticationModule } from './authentication/authentication.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    WatchmanModule,
    UserModule,
    CompanyModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

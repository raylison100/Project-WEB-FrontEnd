import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing.module';

import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componets/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdminModule,
    AuthModule
  ],
  providers: [
   SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app.routing.module';

import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared/shared.service';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    AdminModule,
    AuthModule,
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

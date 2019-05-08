import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/auth/login.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserModel('','','','','');
  shared : SharedService;
  message: string;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { 
      this.shared = SharedService.getInstance();
    }

  ngOnInit() {
  }

  login(){
    this.message = '';
    this.loginService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
        this.shared.token = userAuthentication.token;
        this.shared.user = userAuthentication.user;
        this.shared.user.profile = this.shared.user.profile.substring(5);
        this.shared.showTemplate.emit(true);
        this.router.navigate(['default']);
    },err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.message =  "Erro";
    });
  } 

  cancelLogin(){
    this.message = '';
    this.user = new UserModel('','','','','');
    window.location.href = '/login';
    window.location.reload();
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';
import { CurrentAuthLogin } from 'src/app/models/current-auth-login.model';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UserModel } from 'src/app/models/user.model';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResetPasswordComponent } from 'src/app/components/pages/reset-password/reset-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bsModalRef: BsModalRef;

  public username: String = '';
  public password: String = '';

  currentAuthLogin$: Observable<CurrentAuthLogin>;
  userModel$: Observable<UserModel>;

  shared: SharedService;
  message: string;

  constructor(
    private modalService: BsModalService,
    private alertModalService: AlertModalService,
    private loginService: LoginService,
    private router: Router    
  ) {
    this.shared = SharedService.getInstance()
  }


  ngOnInit() {
  }

  login() {

    this.currentAuthLogin$ = this.loginService.login(this.username, this.password);
    this.currentAuthLogin$.subscribe((currentAuthLogin: CurrentAuthLogin) => {
      this.shared.token = currentAuthLogin.access_token;
      this.getUser();
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.message = "Erro";
    });
  }

  getUser() {
    this.userModel$ = this.loginService.getUser(this.shared.token);
    this.userModel$.subscribe((usermodel: UserModel) => {
      this.shared.user = usermodel;
      this.shared.showTemplate = true
      this.router.navigate(['default'])
      this.alertModalService.showAlertSuccess('Bem vindo! Usuario logado com sucesso',1500);
    }, err => {
      this.shared.user = null;
      this.shared.showTemplate = false;
      this.message = "Erro";
    });
  }

  openModalWithComponent() {
   
    this.bsModalRef = this.modalService.show(ResetPasswordComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
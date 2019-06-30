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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted  = false
  
  currentAuthLogin$: Observable<CurrentAuthLogin>;
  userModel$: Observable<UserModel>;

  shared: SharedService;
  message: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,    
    private alertModalService: AlertModalService,
    private loginService: LoginService,
    private router: Router    
  ) {
    this.shared = SharedService.getInstance()
  }


  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  login() {
    this.loading = true;
    this.submitted = true;
    this.currentAuthLogin$ = this.loginService.login(this.form.get('username').value,this.form.get('password').value);
    this.currentAuthLogin$.subscribe((currentAuthLogin: CurrentAuthLogin) => {
      this.shared.token = currentAuthLogin.access_token;
      this.getUser();
    }, err => {
      this.alertModalService.showAlertWarning('Invalid username or password');
      this.shared.token = null;
      this.shared.user = null;
      this.message = "Erro";
      this.loading = false;
    });
  }

  getUser() {
    this.userModel$ = this.loginService.getUser(this.shared.token);
    this.userModel$.subscribe((usermodel: UserModel) => {
      this.shared.user = usermodel;
      this.shared.showTemplate = true
      this.router.navigate(['default'])
      this.loading = false;
      this.alertModalService.showAlertSuccess('Bem vindo! Usuario logado com sucesso',1500);
    }, err => {
      this.shared.user = null;
      this.shared.showTemplate = false;
      this.message = "Erro";
      this.loading = false;
    });
  }

  openModalWithComponent() {
    const bsModalRef : BsModalRef = this.modalService.show(ResetPasswordComponent);
  }
}
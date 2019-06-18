import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { PasswordService } from 'src/app/services/password/password.service';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public emailForm: any;
  public submitted: boolean;
  public loading: boolean;

  constructor(
    private alertModal: AlertModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private passwordService: PasswordService,
    ) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f(){ return this.emailForm.controls; }

  public reset(): void {

    const email = this.f.email.value;

    this.submitted = true;
    
    if(this.emailForm.valid) {
      this.loading = true;

      // this.passwordService.resetPassword(email).subscribe(
      //   (response) => {
      //     if(response.status === 404) {
      //       this.alertModal.showAlertWarning('Verifique o e-mail e tente novamente');
      //       this.loading = false;
      //     } else {
      //       this.alertModal.showAlertSuccess('Um link para redifinir a senha foi enviando para o seu e-mail');
      //       this.router.navigate(['/login']);
      //     }
      //   }, (error) => {
      //     this.alertModal.showAlertWarning('Verifique o e-mail e tente novamente');
      //     this.loading = false;
      //   }
      // );
    }
    
  }

}

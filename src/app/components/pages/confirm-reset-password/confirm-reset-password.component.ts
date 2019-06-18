import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordService } from 'src/app/services/password/password.service';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';

@Component({
  selector: 'app-confirm-reset-password',
  templateUrl: './confirm-reset-password.component.html',
  styleUrls: ['./confirm-reset-password.component.css']
})
export class ConfirmResetPasswordComponent implements OnInit {

  private tokenInfo: any;
  public passwordForm: any;
  public submitted: boolean;
  public loading: boolean;

  constructor(
    private alertModal: AlertModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private passwordService: PasswordService,
  ) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password:         ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:  ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe(
      (params) => {
        const token = params.token;
        this.checkToken(token);
      }, (error) => { }
    );
  }

  get f(){ return this.passwordForm.controls; }

  private checkToken(token: string): void {
    
    this.passwordService.checkResetToken(token).subscribe(
      (response) => {
        
        if(response === 404) {
          this.alertModal.showAlertDanger('O token não é válido');
          this.router.navigate(['/login']);
        }

        this.tokenInfo = response;

      }, (error) => {
        this.alertModal.showAlertDanger('O token não é válido');
        this.router.navigate(['/login']);
      }
    );
  
  }

  public reset(): void {

    const requestData = {
      email: this.tokenInfo.email,
      password: this.f.password.value,
      password_confirmation: this.f.confirmPassword.value,
      token: this.tokenInfo.token
    };

    this.submitted = true;
    
    if(this.passwordForm.valid){
      this.loading = true;

      this.passwordService.confirmPassword(requestData).subscribe(
        (response) => {
          if(response.hasOwnProperty('errors')) {
            this.alertModal.showAlertWarning('Verifique as informações e tente novamente');
            this.loading = false;
          } else {
            this.alertModal.showAlertSuccess('Sua senha foi alterada');
            this.router.navigate(['/login']);
          }
        }, (error) => {
          this.alertModal.showAlertDanger('tente novamente');
          this.loading = false;
        }
      );
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordService } from 'src/app/services/password/password.service';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';
import { ResponseModel } from 'src/app/models/response.model';

@Component({
  selector: 'app-confirm-reset-password',
  templateUrl: './confirm-reset-password.component.html',
  styleUrls: ['./confirm-reset-password.component.css']
})
export class ConfirmResetPasswordComponent implements OnInit {


  form: FormGroup;
  submitted = false
  public loadingCheckout = true;
  public loading = false;
  private tokenInfo: any;

  constructor(
    private fb: FormBuilder,
    private alertModal: AlertModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private passwordService: PasswordService,
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      passwordConfirmation: [null, [Validators.required]],
    });

    this.activatedRoute.params.subscribe(
      (params) => {
        const token = params.token;
        this.checkToken(token);
      }, (error) => { }
    );
  }

  private checkToken(token: string): void {

    this.passwordService.checkResetToken(token).subscribe(
      (response: ResponseModel) => {
        if (!response.error) {
          this.loadingCheckout = false;
          this.tokenInfo = response
        } else {
          this.loadingCheckout = false;
          this.alertModal.showAlertDanger(response.message);
          this.router.navigate(['/login']);
        }
      }, error => {
        this.loadingCheckout = false;
        this.alertModal.showAlertDanger(error.error.message);
        this.router.navigate(['/login']);
      });
  }

  public reset(): void {

    const requestData = {
      email: this.tokenInfo.email,
      password: this.form.get('password').value,
      password_confirmation: this.form.get('passwordConfirmation').value,
      token: this.tokenInfo.token,
    };

    this.submitted = true;

    if (this.form.valid) {
      this.loading = true;
      this.passwordService.confirmPassword(requestData)
        .subscribe((response: ResponseModel) => {
          if (!response.error) {
            this.loading = false;
            this.router.navigate(['/login']);
            this.alertModal.showAlertSuccess(response.message);
          } else {
            this.loading = false;
            this.alertModal.showAlertDanger(response.message);
            this.router.navigate(['/login']);
          }
        }, error => {
          this.loading = false;
          this.alertModal.showAlertDanger(error.error.message);
          this.router.navigate(['/login']);
        });
    }

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

}

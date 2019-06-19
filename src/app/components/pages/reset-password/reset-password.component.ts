import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/services/password/password.service';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';
import { ResponseModel } from 'src/app/models/response.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 

  form: FormGroup;
  submitted = false;
  constructor(
    public bsModalRef: BsModalRef,
    private alertModal: AlertModalService,
    private router: Router,
    private fb: FormBuilder,
    private passwordService: PasswordService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public reset() {
    this.passwordService.resetPassword(this.form.value)
    .subscribe((response: ResponseModel) => {
      if(!response.error){
        this.router.navigate(['default']);
        this.bsModalRef.hide();
        this.alertModal.showAlertSuccess(response.message);
      }else{
        this.alertModal.showAlertDanger(response.message);
      }          
    }, error => {
      this.alertModal.showAlertDanger(error.error.message);
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
}

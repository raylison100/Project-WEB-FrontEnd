import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';
import { ResponseModel } from 'src/app/models/response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private alertModalService: AlertModalService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  registerUser() {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.createOrUpdate(this.form.value)
        .subscribe((response: ResponseModel) => {
          if(!response.error){
            this.alertModalService.showAlertSuccess(response.message)
          }else{
            this.alertModalService.showAlertDanger(response.message)
          }
          
        }, error => {
          this.alertModalService.showAlertDanger(error.error.message)
        });
    }

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UserModel } from 'src/app/models/user.model';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ResponseModel } from 'src/app/models/response.model';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  edit = false;
  submitted = false
  loading = false;

  shared: SharedService;

  constructor(
    private alertModalService: AlertModalService,
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.shared = SharedService.getInstance()
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.email]],
    });

    this.form.get('email').disable();
    this.form.get('name').disable();
  }

  editMode() {
    this.edit = true;
    this.form.enable();
  }

  salveMode() {
    this.edit = false;
    this.form.disable();     
  }

  updateUser() {
    this.submitted = true;

    if (this.form.valid) {
      this.salveMode();
      this.userService.update(this.form.value, this.shared.user.id)
        .subscribe((response: ResponseModel) => {
          if(!response.error){
            this.alertModalService.showAlertSuccess(response.message);
            this.loading = false;
      this.submitted = false;
          }else{
            this.alertModalService.showAlertDanger(response.message);
            this.loading = false;
      this.submitted = false;
          }          
        }, error => {
          console.log(error)
          this.alertModalService.showAlertDanger(error.error.message)
          this.loading = false;
          this.submitted = false;
        });
    }

  }
  hasError(field: string) {
    return this.form.get(field).errors;
  }
}

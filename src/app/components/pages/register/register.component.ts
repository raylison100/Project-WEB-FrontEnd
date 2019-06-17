import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel
  message: string;

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      nome    : [null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      email   : [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    });
  }

  registerUser(){
    this.submitted = true;
    if (this.form.valid){      
      this.user = this.form.value;
      console.log(this.user)
    }
    // this.userService.createOrUpdate(this.user);
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }
}

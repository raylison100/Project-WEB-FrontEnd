import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  shared: SharedService;
  user: UserModel;

  constructor() {
    this.shared = SharedService.getInstance()
   }

  ngOnInit() {
    this.user = this.shared.user;
  }

}

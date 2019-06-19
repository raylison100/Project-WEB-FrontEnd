import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.css']
})
export class ConfirmRegisterComponent implements OnInit {

  public token: string;
  public loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertModalService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.token = params.token;
      }
    );

    this.userService.confirmRegister(this.token).subscribe(
      (response) => {
        this.loading = false;
        this.router.navigate(['login']);
        this.alertService.showAlertSuccess("Cadastro ativado com sucesso",2000)
      }, error => {
        this.alertService.showAlertDanger(error.error.message);
      })
  }

}

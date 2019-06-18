import { Injectable } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/components/alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER  = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(
    private modalService: BsModalService,
  ) { }

  private showAlert(message: any, type: string, dismissTimeOut?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dismissTimeOut){
      setTimeout(() => bsModalRef.hide(),dismissTimeOut);
    }
  }

  showAlertDanger(message: any) {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: any, dismissTimeOut?: number) {
    this.showAlert(message, AlertTypes.SUCCESS,dismissTimeOut);
  }
}

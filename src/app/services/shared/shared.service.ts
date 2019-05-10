import { Injectable, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user.model';
 

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private static instance:SharedService = null;
  user : UserModel;
  token : String;
  showTemplate: boolean;

  constructor() {
    return SharedService.instance =  SharedService.instance || this;
   }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService(); 
    }
    return this.instance;
  }

  isLoggendIn(): boolean{
    if(this.user == null){
      return false;
    }
    return this.user.email != '';
  }
}

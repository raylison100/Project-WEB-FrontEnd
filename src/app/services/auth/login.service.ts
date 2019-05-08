import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { API_BACKEND } from 'src/app/services/api.integration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(user: UserModel){
      return this.http.post(`${API_BACKEND}/api/auth`,user);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from 'src/app/models/user.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: UserModel) {
    user.id = null;
    return this.http.post(`${environment.API_BACKEND}/users`, user);
  }

  update(user: any, id: string) {
     return this.http.put(`${environment.API_BACKEND}/users/${id}`, user);
  }

  findAll(page: number, count: number) {
    return this.http.get(`${environment.API_BACKEND}/users/${page}/${count}`);
  }

  findById(id: string) {
    return this.http.get(`${environment.API_BACKEND}/users/`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API_BACKEND}/users/${id}`);
  }

  public confirmRegister(token: string) {
    return this.http.get(`${environment.API_BACKEND}/activate/${token}`)
  }
}

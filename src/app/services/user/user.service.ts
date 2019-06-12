import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createOrUpdate(user: UserModel){
    if(user.id != null && user.id != ''){
        return this.http.put(`${environment.API_BACKEND}/user`,user);
    }else{
      user.id = null;
      return this.http.post(`${environment.API_BACKEND}/user`,user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${environment.API_BACKEND}/user/${page}/${count}`);
  }
  
  findById(id: string){
    return this.http.get(`${environment.API_BACKEND}/user/${id}`);
  }

  delete(id: string){
    return this.http.delete(`${environment.API_BACKEND}/api/user/${id}`);
  }
}

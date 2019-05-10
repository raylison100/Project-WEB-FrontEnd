import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/app/models/user.model';
import { API_BACKEND } from 'src/app/services/api.integration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createOrUpdate(user: UserModel){
    if(user.id != null && user.id != ''){
        return this.http.put(`${API_BACKEND}/api/user`,user);
    }else{
      user.id = null;
      return this.http.post(`${API_BACKEND}/api/user`,user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${API_BACKEND}/api/user/${page}/${count}`);
  }
  
  findById(id: string){
    return this.http.get(`${API_BACKEND}/api/user/${id}`);
  }

  delete(id: string){
    return this.http.delete(`${API_BACKEND}/api/user/${id}`);
  }


}

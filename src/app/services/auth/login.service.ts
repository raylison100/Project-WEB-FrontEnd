import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CurrentAuthLogin } from 'src/app/models/current-auth-login.model';
import { environment } from 'src/environments/environment';
import { tap, take } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  public login(username: String, password: String){

    const requestData = {
      "username"      : username,
      "password"      : password,
      "grant_type"    : environment.grant_type,
      "client_secret" : environment.client_secret,
	    "client_id" 	  : environment.client_id
    };

    return this.http.post<CurrentAuthLogin>(`${environment.API_BACKEND}/oauth/token`, requestData)
      .pipe(
        tap(console.log),
        take(1)
      );  
  }

  public getUser(token: String){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token
      })
    };
    return this.http.get<UserModel>(`${environment.API_BACKEND}/authentication/user`,httpOptions).pipe(
      tap(console.log),
      take(1)
    );
  }
}

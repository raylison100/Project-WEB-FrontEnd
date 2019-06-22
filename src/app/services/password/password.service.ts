import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  public resetPassword(email: string) {
    return this.http.post(`${environment.API_BACKEND}/password/email`, email);
  }

  public confirmPassword(requestData: any) {
    return this.http.post(
      `${environment.API_BACKEND}/password/reset`,requestData
    );
  }

  public checkResetToken(token: string) {
    return this.http.get(
      `${environment.API_BACKEND}/password/find/${token}`
    );
  }
}

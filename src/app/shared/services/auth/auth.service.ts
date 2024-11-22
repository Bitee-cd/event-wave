import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS, COOKIES } from '../../../app.constants';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  signup(payload: {
    email: string;
    password: string;
    firstName: string;
    phoneNumber: string;
    lastName: string;
  }): Observable<any> {
    return this.http.post(API_URLS.auth.signup(), payload);
  }
  login(payload: { email: string; password: string }): Observable<any> {
    return this.http.post(API_URLS.auth.login(), payload);
  }
  verifyOtp(payload: { email: string; otp: string }): Observable<any> {
    return this.http.post(API_URLS.auth.verify_otp(), payload);
  }
  regenerateOtp(payload: { email: string }): Observable<any> {
    return this.http.post(API_URLS.auth.regenerate_otp(), payload);
  }
  forgotPassword(payload: { email: string }): Observable<any> {
    return this.http.post(API_URLS.auth.forgot_password(), payload);
  }
  changePassword(payload: {
    email: string;
    password: string;
    otp: string;
  }): Observable<any> {
    return this.http.post(API_URLS.auth.change_password(), payload);
  }

  handleLogin(response: { data: { token: string } }) {
    this.cookieService.set(COOKIES.AUTH, response.data?.token);
  }
  getAuthToken(): string {
    return this.cookieService.get(COOKIES.AUTH);
  }
}

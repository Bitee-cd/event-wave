import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isAuthRequest(req.url)) {
      return next.handle(req);
    }

    const authToken = this.authService.getAuthToken();

    const clonedRequest = authToken ? this.addAuthHeader(req, authToken) : req;

    return next.handle(clonedRequest);
  }

  /**
   * Checks if the request is for authentication.
   * @param url The request URL
   * @returns True if the request is for authentication
   */
  private isAuthRequest(url: string): boolean {
    return url.includes('auth');
  }

  /**
   * Adds the Authorization header to the request.
   * @param req The original request
   * @param token The auth token
   * @returns A cloned request with the Authorization header
   */
  private addAuthHeader(
    req: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private authService: ApiService;

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(ApiService);
    const token: string = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }
}

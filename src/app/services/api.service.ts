import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Flat, User } from '../model';
import { catchError, map, retry } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { UserService } from './user.service';
import { ICart } from '../model/Interface';

const api = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private loader: LoadingService,
    private userService: UserService
  ) {}

  private handleError(error: HttpErrorResponse) {
    this.loader.hide();
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  public getAllFlat(): Observable<HttpResponse<Flat[]>> {
    this.loader.show();
    return this.httpClient.get<HttpResponse<Flat[]>>(
      `${api}/flats`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  public login(username: string, password: string): Observable<HttpResponse<any>> {
    this.loader.show();
    return this.httpClient
      .post<HttpResponse<any>>(`${api}/login`, {
        email: username,
        password: password
      })
      .pipe(
        retry(3),
        map(user => {
          console.log(user);
          if (user && user.body.user && user.body.applicationToken) {
            this.userService.setUser(<User>user.body.user);
            localStorage.setItem('token', user.body.applicationToken);
          }

          return user;
        }),
        catchError(this.handleError)
      );
  }

  public register(user: User): Observable<HttpResponse<any>> {
    this.loader.show();
    return this.httpClient
      .post<HttpResponse<any>>(
        `${api}/register`,
        {
          email: user.email,
          password: user.password
        },
        { observe: 'response' }
      )
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public logout(): Observable<HttpResponse<any>> {
    this.loader.show();
    return this.httpClient
      .get<HttpResponse<any>>(`${api}/logout`, {
        observe: 'response',
        params: new HttpParams().set(
          'applicationToken',
          localStorage.getItem('token')
        )
      })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public getCartOf(userId: number): Observable<HttpResponse<ICart>> {
    this.loader.show();
    return this.httpClient
      .get<HttpResponse<ICart>>(`${api}/cart`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${localStorage.getItem('token')}`
        }),
        params: new HttpParams().set('userId', `${userId}`)
      });
  }
}

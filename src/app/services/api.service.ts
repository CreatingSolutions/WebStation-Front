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

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const api = 'http://localhost:8081/api';

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

  public getAllFlat(): Observable<Flat[]> {
    return this.httpClient.get<Flat[]>(`${api}/flats`, httpOptions);
  }

  public login(username: string, password: string): Observable<string> {
    this.loader.show();
    return this.httpClient
      .post<any>(`${api}/authenticate`, {
        username: username,
        password: password
      })
      .pipe(
        retry(3),
        map(user => {
          this.loader.hide();
          if (user && user.user && user.applicationToken) {
            this.userService.setUser(<User>user.user);
            localStorage.setItem('token', user.applicationToken);
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
          user: user
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
      .get(`${api}/register`, {
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

  public getCartOf(userId: number): Observable<ICart> {
    this.loader.show();
    return this.httpClient
      .get<ICart>(`${api}/cart`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${localStorage.getItem('token')}`
        }),
        params: new HttpParams().set('userId', `${userId}`)
      })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}

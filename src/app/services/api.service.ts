import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Cart, Flat, User} from '../model';
import {catchError, map, retry} from 'rxjs/operators';
import {LoadingService} from './loading.service';
import {UserService} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const api = 'http://51.75.140.39:8081';

// Change si besoin, pour le local
// const api = 'http://51.75.140.39:8081';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient, private loader: LoadingService, private userService: UserService) {}

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }

  public getAllFlat(): Observable<Flat[]> {
    return this.httpClient.get<Flat[]>(`${api}/flats`, httpOptions);
  }

  public login(username: string, password: string): Observable<string> {
    return this.httpClient
      .post<any>(`${api}/login`, {
        email: username,
        password: password
      })
      .pipe(
        retry(3),
        map(user => {
          console.log(user);
          if (user && user.user && user.applicationToken) {
            this.userService.setUser(<User> user.user);
            localStorage.setItem('token', user.applicationToken);
          }

          return user;
        }),
        catchError(ApiService.handleError)
      );
  }

  public register(user: User): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<HttpResponse<any>>(`${api}/register`, {
        email: user.email,
        password: user.password
      }, {observe: 'response'})
      .pipe(
        retry(3),
        catchError(ApiService.handleError)
      );
  }

  public logout(): Observable<HttpResponse<any>> {
    return this.httpClient.get(`${api}/logout`,
      {
        observe: 'response',
        params: new HttpParams().set('applicationToken', localStorage.getItem('token'))
      }).pipe(
      retry(3),
      catchError(ApiService.handleError)
    );
  }

  public getCartOf(userId: number): Observable<Cart> {
    const cart = this.httpClient.get<Cart>(`${api}/cart`, {
      headers:  new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${localStorage.getItem('token')}`
      }),
      params: new HttpParams().set('userId', `${userId}`)
    }).pipe(retry(3), catchError(ApiService.handleError));
    this.userService.addCartToUser(cart);
    return cart;
  }
}

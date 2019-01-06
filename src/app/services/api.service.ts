import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Cart, Flat, User} from '../store/models';
import { catchError, retry } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private loader: LoadingService,
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

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getAllFlat(): Observable<Flat[]> {
    return this.httpClient.get<Flat[]>(`${environment.apiUrl}/flat`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(retry(3), catchError(this.handleError)
    );
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/login`, {email: email, password: password})
      .pipe(retry(3), catchError(this.handleError));
  }

  public register(email: string, password: string): Observable<any> {
    this.loader.show();
    return this.httpClient
      .post<any>(`${environment.apiUrl}/register`, {email: email, password: password})
      .pipe(retry(3), catchError(this.handleError));
  }

  /*public logout(): Observable<HttpResponse<any>> {
    this.loader.show();
    return this.httpClient
      .get<HttpResponse<any>>(`${environment.apiUrl}/logout`, {
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

  public getCartOf(userId: number): Observable<HttpResponse<Cart>> {
    this.loader.show();
    return this.httpClient
      .get<HttpResponse<Cart>>(`${environment.apiUrl}/cart`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${localStorage.getItem('token')}`
        }),
        params: new HttpParams().set('userId', `${userId}`)
      });
  }

  public sendCartWith(userId: number, flats: Flat[]): Observable<HttpResponse<any>> {
    const flatsIds: number[] = flats.map(x => x.flatId);
    this.loader.show();

    return this.httpClient
      .post<HttpResponse<any>>(
        `${environment.apiUrl}/cart/addElements?userId=${JSON.stringify(userId)}&flatId=${JSON.stringify(flatsIds)}`,
        { observe: 'response'}
      )
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public addElementToCart(userId: number, flatId: number): Observable<HttpResponse<any>> {
    this.loader.show();

    return this.httpClient.post<HttpResponse<any>>(
      `${environment.apiUrl}/cart/addOne?userId=${JSON.stringify(userId)}&flatId=${JSON.stringify(flatId)}`,
      { observe: 'response'}
      ).pipe(
        retry(3),
        catchError(this.handleError)
    );
  }*/
}

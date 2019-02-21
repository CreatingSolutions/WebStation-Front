import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse, HttpParams
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

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getAllFlat(): Observable<Flat[]> {
    return this.httpClient.get<Flat[]>(`${environment.apiUrl}/flat`);
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/login`, {email: email, password: password});
  }

  public register(email: string, password: string): Observable<any> {
    this.loader.show();
    return this.httpClient
      .post<any>(`${environment.apiUrl}/register`, {email: email, password: password});
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
  */

  public getCartOf(user: User): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/cart`, {
        params: new HttpParams().set('userId', `${user.id}`)
      });
  }

  /*public sendCartWith(userId: number, flats: Flat[]): Observable<HttpResponse<any>> {
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

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';
import {environment} from '../../environments/environment';
import {Flat, User, Lift, Stuff, School, Cart} from '../store/models';
import { timeout } from 'q';

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
    return this.httpClient.get<Flat[]>(`${environment.apiUrl}/flats`);
  }

  public addFlatToCart(flatId: number): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/flats`, { flatId });
  }

  public deleteFlatInCart(flatId: number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${environment.apiUrl}/cart`, {
      params: new HttpParams().set('flatId', `${flatId}`)
    });
  }

  public getLiftForfait({type, forfait}): Observable<Lift> {
    const link = `lifts/${type}${forfait ? `/${forfait}` : ''}`;
    return this.httpClient.get<Lift>(`${environment.apiUrl}/${link}`);
  }

  public addForfaitToCart(forfait: {liftId: number, insurance: boolean, taked: number}) {
    return this.httpClient.post(`${environment.apiUrl}/lifts`, forfait);
  }

  public deleteForfaitInCart(liftId: number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${environment.apiUrl}/cart`, {
      params: new HttpParams().set('liftId', `${liftId}`)
    });
  }

  public getAllStuff(): Observable<Stuff[]> {
    return this.httpClient.get<Stuff[]>(`${environment.apiUrl}/stuffs`);
  }

  public addStuffToCart(stuff: {stuffId: number, taked: number}): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/flats`, stuff);
  }

  public deleteStuffInCart(stuffId: number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${environment.apiUrl}/cart`, {
      params: new HttpParams().set('stuffId', `${stuffId}`)
    });
  }

  public getAllSchool(): Observable<School[]> {
    return this.httpClient.get<School[]>(`${environment.apiUrl}/packs`);
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/login`, {email: email, password: password});
  }

  public register(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/register`, {email: email, password: password});
  }

  public logout(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/logout`);
  }

  public getCartOf(user: User): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/cart`, {
        params: new HttpParams().set('userId', `${user.id}`)
      });
  }

  public deleteCart(): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${environment.apiUrl}/cart`);
  }

  public validateCart(): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/cart/valider`, {});
  }
}

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';
import {environment} from '../../environments/environment';
import { Flat, User, Lift, Stuff, School } from '../store/models';
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

  public getLiftForfait({type, forfait}): Observable<Lift> {
    const link = `lifts/${type}${forfait ? `/${forfait}` : ''}`;
    return this.httpClient.get<Lift>(`${environment.apiUrl}/${link}`);
  }

  public getAllStuff(): Observable<Stuff[]> {
    return this.httpClient.get<Stuff[]>(`${environment.apiUrl}/stuffs`);
  }

  public getAllSchool(): Observable<School[]> {
    return this.httpClient.get<School[]>(`${environment.apiUrl}/schools`);
  }

  public setForfait(forfait: {id: number, insurance?: boolean, taked?: number}) {
    return this.httpClient.post(`${environment.apiUrl}/lifts`, forfait);
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/login`/*, {email: email, password: password}*/);
  }

  public register(email: string, password: string): Observable<any> {
    this.loader.show();
    return this.httpClient.get<any>(`${environment.apiUrl}/register`/*, {email: email, password: password}*/);
  }

  public logout(): Observable<any> {
    this.loader.show();
    return this.httpClient
      .get<any>(`${environment.apiUrl}/logout`);
  }

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

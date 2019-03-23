import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';
import {environment} from '../../environments/environment';
import {Flat, Lift, Stuff, School, Cart} from '../store/models';

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
    return this.httpClient.post<any>(`${environment.apiUrl}/stuffs`, stuff);
  }

  public deleteStuffInCart(stuffId: number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${environment.apiUrl}/cart`, {
      params: new HttpParams().set('stuffId', `${stuffId}`)
    });
  }

  public getAllSchool(): Observable<School[]> {
    return of<School[]>(
      [
        {
          packId: 1,
          period: {
            periodId: 1,
            startDate: new Date(),
            endDate: new Date()
          },
          tickets: {
            MORNING: 3,
            MOON: 4,
            AFTERNOON: 4,
            EVENING: 3,
            ALL: 10
          },
          price: 50,
          available: true
        },
        {
          packId: 2,
          period: {
            periodId: 2,
            startDate: new Date(),
            endDate: new Date()
          },
          tickets: {
            MORNING: 3
          },
          price: 10,
          available: true
        }
      ]);
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

  public getCartOf(): Observable<any> {
    return of<Cart>(
      {
        cartId: 48,
        id: 48,
        flats: [
          {
            flatId: 1,
            title: 'Appartement situé plein sud',
            description: 'L\'appartement situé dans un petit coin de paradis avec cristiano ronaldo criant Siiiiiiiiiii',
            price: 200
          },
          {
            flatId: 2,
            title: 'Appartement situé plein sud',
            description: 'L\'appartement situé dans un petit coin de paradis avec cristiano ronaldo criant Siiiiiiiiiii',
            price: 400.2
          }
        ],
        totalFlatPrice: 200,
        lifts: [
          {
            liftId: 1,
            title: 'Forfait 1/2 J',
            description: 'Forfait jeune',
            taked: 3,
            insurance: false,
            price: 80
          }
        ],
        totalLiftPrice: 200,
        stuffs: [
          {
            stuffId: 1,
            title: 'Skis alpins avec bâtons et chaussuuuuuures pour adultes',
            description: 'Vendu par ToutSchuss',
            taked: 3,
            price: 80
          }
        ],
        totalStuffPrice: 200,
        totalPrice: 600,
        validate: false,
        paid: false
      }
    );
  }

  public deleteCart(): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${environment.apiUrl}/cart`);
  }

  public validateCart(): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/cart/valider`, {});
  }
}

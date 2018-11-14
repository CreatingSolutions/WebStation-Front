import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logement, User } from '../model';
import { map } from 'rxjs/operators';
import {LoadingService} from './loading.service';

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
  constructor(private httpClient: HttpClient, private loader: LoadingService) {}

  getAllLogement(): Observable<Logement[]> {
    return this.httpClient.get<Logement[]>(`${api}/flats`, httpOptions);
  }

  login(username: string, password: string): Observable<string> {
    this.loader.show();
    return this.httpClient
      .post<any>(`${api}/authenticate`, {
        username: username,
        password: password
      })
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  register(user: User): Observable<number> {
    console.log(user);
    return this.httpClient.post<number>(`${api}/register`, user, httpOptions);
  }
}

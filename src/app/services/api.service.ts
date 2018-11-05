import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Logement } from "../model/Logement";
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const api: String = 'http://localhost:8081/api'

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getAllLogement(): Observable<Logement[]> {
    return this.httpClient.get<Logement[]>(`${api}/flats`, httpOptions);
  }

  login(username: string, password: string): Observable<string> {
    return this.httpClient
      .post<any>(`${api}/authenticate`, {
        username: username,
        password: password
      })
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem("currentUser", JSON.stringify(user));
          }

          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem("currentUser");
  }

  register(value: any): Observable<number> {
    return this.httpClient.post<number>("", value, httpOptions);
  }
}

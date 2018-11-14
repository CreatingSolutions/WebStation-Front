import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class MockService {

  constructor(private httpClient: HttpClient) {
  }

  public getLogementsMock(): Observable<any> {
    return this.httpClient.get<any>('../../assets/mock/expFlatsbis.json', httpOptions);
  }
}

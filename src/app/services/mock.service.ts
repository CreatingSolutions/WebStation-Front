import { Injectable } from "@angular/core";
import { Logement } from "../model/Logement";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class MockService {

  constructor(private httpClient: HttpClient) {
  }

  public getLogementsMock() {
    return this.httpClient.get("../../assets/mock/expFlatsbis.json", httpOptions);
  }
}

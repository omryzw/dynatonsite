import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public _url = 'https://jsonmock.hackerrank.com/api/transactions?userId=';

  constructor(private http: HttpClient) { }

  getUserInfo(user) {
    return this.http.get(this._url + user);
  }
}

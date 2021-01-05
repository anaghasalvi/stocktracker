import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockdataService {

  constructor(private http: HttpClient) {

  }

  checkdata() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

}

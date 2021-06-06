import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private httpClient: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  getallProducts(): Observable<any>{
    return this.httpClient.get(' http://localhost:3000/products');
  }
  getProductsbyID(id: any): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/products/${id}`);
  }
  getProductDetailByID(id: any): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/products-detail/${id}`);
  }

}

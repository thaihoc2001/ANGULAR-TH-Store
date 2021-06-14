import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private httpClient: HttpClient) { }
  getCart(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/cart');
  }
  getCartByID(id: any): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/cart/${id}`);
  }
  postCart(infomation: any): Observable<any>{
    return this.httpClient.post(`http://localhost:3000/cart`, infomation);
  }
  putCartByID(id: any, infomation: any): Observable<any>{
    return this.httpClient.put(`http://localhost:3000/cart/${id}`, infomation);
  }
  deleteCartByID(id: any): Observable<any>{
    return this.httpClient.delete(`http://localhost:3000/cart/${id}`);
  }
}

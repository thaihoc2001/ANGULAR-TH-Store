import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor( private https: HttpClient) { }
  getOder(): Observable<any>{
    return this.https.get(' http://localhost:3000/Order');
  }
  postOrder(infoOrder: any): Observable<any>{
    return this.https.post(' http://localhost:3000/Order', infoOrder);
  }
}

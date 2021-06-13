import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  Login(): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/Users`);
  }
  register(infoUser: any): Observable<any>{
    return this.httpClient.post('http://localhost:3000/Users', infoUser);
  }
}

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
  getUser(): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/Users`);
  }
  getUserByID(id: any): Observable<any>{
    return this.httpClient.get(`http://localhost:3000/Users/${id}`);
  }
  postInfoUser(infoUser: any): Observable<any>{
    return this.httpClient.post(`http://localhost:3000/Users`, infoUser);
  }
  putInfoUser(infoUser: any, id: any): Observable<any>{
    return this.httpClient.put(`http://localhost:3000/Users/${id}`, infoUser);
  }
}

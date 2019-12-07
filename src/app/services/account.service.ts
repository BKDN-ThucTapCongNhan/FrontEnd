import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  registerUrl = "http://localhost:8080";


  
  login(userName: String, password: String): Observable<any> {
    return this.http.post<any>(this.registerUrl + '/login', { userName: userName, password: password });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { LanguageProgram } from '../models/languageProgram';
import { Level } from '../models/level';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8001/api/v1/admin';


  getAllAccounts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getAllTeacher(): Observable<any> {
    return this.http.get(this.baseUrl + '/accounts');
  }
  getAllCourse(): Observable<any> {
    return this.http.get(this.baseUrl + '/course');
  }
  getAllClass(): Observable<any> {
    return this.http.get(this.baseUrl + '/listClass');
  }

  getUserInfor(id:number):Observable<any> {
    return this.http.get(this.baseUrl+'/userInfor/'+id);
  }

  createAccount(account: Account): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/createAccount', account);
  }
  createLanguageProgram(languageProgram: LanguageProgram): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/createlanguageProgram', languageProgram);
  }
  createLevel(level: Level): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/createLevel', level);
  }
  createClass( obj: Class): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/createLevel', obj);
  }

  registerUser(userInfo: Account): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/register', userInfo);
  }

}

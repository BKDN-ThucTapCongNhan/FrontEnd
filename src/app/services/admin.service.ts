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

  private baseUrl = 'http://192.168.43.111:8001/api/v1/admin';


  getAllAccounts(): Observable<any> {
    return this.http.get(this.baseUrl + '/accounts');
  }
  getAllTeacher(): Observable<any> {
    return this.http.get(this.baseUrl + '/accounts');
  }
  getAllCourse(): Observable<any> {
    return this.http.get(this.baseUrl + '/courses');
  }

  getAllLanguageProgram(): Observable<any> {
    return this.http.get(this.baseUrl + '/language-programs');
  }

  getAllClass(): Observable<any> {
    return this.http.get(this.baseUrl + '/classes');
  }
  getAllLevel(): Observable<any> {
    return this.http.get(this.baseUrl + '/levels');
  }

  getUserInfor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/userInfor/' + id);
  }

  createAccount(account: Account): Observable<any> {
    console.log("123");
    return this.http.post<any>(this.baseUrl + '/accounts/register', account);
  }
  createLanguageProgram(languageProgram: LanguageProgram): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/language-programs', languageProgram);
  }
  createLevel(level: Level): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/levels', level);
  }
  createClass(obj: Class): Observable<any> {
    console.log(obj)
    return this.http.post<any>(this.baseUrl + '/classes', obj);
  }
  getDetailLevel(id: String): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/levels/' + id);
  }
  registerUser(userInfo: Account): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/register', userInfo);
  }
  updateLevel(obj: Level, id: String): Observable<any> {
    console.log(obj)
    return this.http.patch<any>(this.baseUrl + '/levels/edit/' + id, obj);
  }
  deleteLevel(obj: Level, id: String): Observable<any> {
    console.log(id);
    return this.http.patch<any>(this.baseUrl + '/levels/remove/' + id, obj);
  }

}

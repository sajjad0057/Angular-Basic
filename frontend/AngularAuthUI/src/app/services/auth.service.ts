import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private baseUrl: string = "https://localhost:7175/api/Users/"

  constructor(private http: HttpClient) { }

  signUp(userObj: any): Observable<any>{
    return this.http.post<any>(`api/users/register`,userObj)
  }

  login(loginObj: any): Observable<any>{
    return this.http.post<any>(`api/users/authenticate`,loginObj)
  }
}

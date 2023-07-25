import { Injectable } from '@angular/core';
import { environment } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.myAppUrl}/register`, user);
  }
  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.myAppUrl}/login`, user);
  }
}

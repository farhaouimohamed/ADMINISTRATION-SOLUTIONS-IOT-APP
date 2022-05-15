import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const API_URL = 'http://localhost:8080/api/user/';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
  saveUser(user: User) {
    return this.http.post<User>(API_URL + 'add', user);
  }
}

import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../types/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _url = `${environment.apiUrl}users/`;

  constructor(private http: HttpClient) {}

  getUsers$(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  getUserById$(id: string): Observable<User> {
    return this.http.get<User>(this._url + id);
  }
}

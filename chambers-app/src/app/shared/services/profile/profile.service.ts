import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../types/Profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _url = `${environment.apiUrl}profile/`;

  constructor(private http: HttpClient) {}

  getProfile$(): Observable<Profile> {
    return this.http.get<Profile>(this._url);
  }
}

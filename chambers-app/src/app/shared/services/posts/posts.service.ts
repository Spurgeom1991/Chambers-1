import { environment } from './../../../../environments/environment';
import { Post } from './../../types/Post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _url = `${environment.apiUrl}posts/`;

  constructor(private http: HttpClient) {}

  getPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>(this._url);
  }

  getPostById$(id: string): Observable<Post> {
    return this.http.get<Post>(this._url + id);
  }
}

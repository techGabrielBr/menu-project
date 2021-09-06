import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Posts } from '../models/posts';

const url = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

constructor( private http:HttpClient) { }

  listar(): Observable<Posts[]> {
    return this.http.get<Posts[]>(url);
  }

}

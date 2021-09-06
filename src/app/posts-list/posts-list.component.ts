import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PostsService } from './posts.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['../../assets/styles/tables.css']
})
export class PostsListComponent implements OnInit {

  posts!: Observable<Posts[]>;

  filter!: string;

  key: string = 'userId';
  reverse: boolean = false;

  constructor( private postsService: PostsService) { }

  ngOnInit() {
    this.listar();
  }

  private listar(): void {
    this.posts = this.postsService.listar();
  }

  ordenar(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}



import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumsService } from './albums.service';
import { Albums } from '../models/albums';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['../../assets/styles/tables.css']
})
export class AlbumsListComponent implements OnInit {

  albums!: Observable<Albums[]>;

  filter!: string;

  key: string = 'userId';
  reverse: boolean = false;

  constructor( private albumsService:AlbumsService) { }

  ngOnInit() {
    this.listar();
  }

  listar(): void {
    this.albums = this.albumsService.listar();
  }

  ordenar(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}

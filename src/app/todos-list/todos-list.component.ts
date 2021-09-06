import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TodosService } from './todos.service';
import { Todos } from '../models/todos';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['../../assets/styles/tables.css']
})
export class TodosListComponent implements OnInit {

  todos!: Observable<Todos[]>;

  filter!: string;

  key: string = 'completed';
  reverse: boolean = false;

  constructor( private todosService:TodosService) { }

  ngOnInit() {
    this.listar();
  }

  listar(): void{
    this.todos = this.todosService.listar();
  }

  ordenar(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}

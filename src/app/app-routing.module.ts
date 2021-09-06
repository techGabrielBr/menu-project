import { TodosListComponent } from './todos-list/todos-list.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-list/home/home.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/posts', component: PostsListComponent },
  { path: 'home/albums', component: AlbumsListComponent },
  { path: 'home/todos', component: TodosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

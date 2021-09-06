import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

import { PostsListComponent } from './posts-list/posts-list.component';
import { CoreModule } from './core/core.module';
import { HomeListModule } from './home-list/home-list.module';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { TodosListComponent } from './todos-list/todos-list.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    AlbumsListComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeListModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

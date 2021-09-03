import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';

import {HttpClientModule} from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { CommentaireCardComponent } from './post-list/post-card/commentaire-card/commentaire-card.component';
import { UserAddComponent } from './user-add/user-add.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    PostListComponent,
    PostCardComponent,
    CommentaireCardComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

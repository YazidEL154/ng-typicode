import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentaireCardComponent } from './post-list/post-card/commentaire-card/commentaire-card.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'users', component: UserListComponent, pathMatch:'full'},
  //{path:'posts', component: PostListComponent, pathMatch:'full'},
  {
    path: 'posts',
    children: [
      { path: '', component: PostListComponent, pathMatch: 'full' },
      { path: ':id', component: CommentaireCardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

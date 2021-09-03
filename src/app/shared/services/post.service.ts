import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  user!: Observable<User>;
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.typicode_url}/posts`);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.typicode_url}/users`);
  }

  getUser(): Observable<User>{
    this.getUsers().subscribe((users:User[]) =>{
      users.findIndex((u: User) => {
        //return u.id === todo.id;
        this.getPosts().subscribe((posts:Post[]) => {
          let postIndex = posts.findIndex((p: Post) => {
            return u.id === p.userId;
          })
          if(postIndex !== -1)
          {
            this.user = this.http.get<User>(`${environment.typicode_url}/users/${u.id}`);
          }
          //userIndex = postIndex;
        })
      });
    })
    return this.user;
  }

  getPost(id: number): Observable<Post>{
    return this.http.get<Post>(`${environment.typicode_url}/posts/${id}`);
  }

  getPostComments(id: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${environment.typicode_url}/posts/${id}/comments`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post';
import { User } from 'src/app/shared/models/user';
import { PostService } from 'src/app/shared/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {


  @Input() post!:Post; 

  userObs!: Observable<User>;
  user!: User;

  constructor(private http: HttpClient, private postService:PostService) { }
  
  getUser(): Observable<User>{
    this.postService.getUsers().subscribe((users:User[]) =>{
      users.findIndex((u: User) => {
        //return u.id === todo.id;
        this.postService.getPosts().subscribe((posts:Post[]) => {
          let postIndex = posts.findIndex((p: Post) => {
            return u.id === p.userId;
          })
          if(postIndex !== -1)
          {
            this.userObs = this.http.get<User>(`${environment.typicode_url}/users/${u.id}`);
          }
          //userIndex = postIndex;
        })
      });
    })
    return this.userObs;
  }

  

  ngOnInit(): void {
    this.postService.getUser().subscribe((user:User) => {this.user=user;});
  }

}

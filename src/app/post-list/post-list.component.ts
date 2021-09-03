import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { User } from '../shared/models/user';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!: Post[];
  //user!: User;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts:Post[]) => {this.posts=posts;});
    //this.postService.getUser().subscribe((user:User) => {this.user=user;});
  }

}

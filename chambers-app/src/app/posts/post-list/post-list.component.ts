import { Post } from './../../shared/types/Post';
import { PostsService } from './../../shared/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getPosts$();
  }

  ngOnInit(): void {}
}

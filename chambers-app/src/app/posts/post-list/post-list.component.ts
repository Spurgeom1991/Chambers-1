import { User } from './../../shared/types/User';
import { UsersService } from './../../shared/services/users/users.service';
import { Post } from './../../shared/types/Post';
import { PostsService } from './../../shared/services/posts/posts.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  list$: Observable<{ post: Post; user: User | null }[]>;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.list$ = this.postsWithUserInfo$();
  }
  // Ran out of time but would sub to query params for lifespan of component and use angular material dialog box to open post details

  ngOnInit(): void {}

  postsWithUserInfo$() {
    return combineLatest([
      this.postsService.getPosts$(),
      this.usersService.getUsers$(),
    ]).pipe(
      map(([posts, users]) => {
        return posts.map((post) => ({
          post,
          user: users.find((u) => u.id === post.user) || null,
        }));
      })
    );
  }
}

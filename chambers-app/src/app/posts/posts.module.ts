import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: PostListComponent }];

@NgModule({
  declarations: [PostDetailComponent, PostListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class PostsModule {}

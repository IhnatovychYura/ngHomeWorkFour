import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import {PostComponent} from './components/post/post.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';


@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostModuleRoutingModule
  ]
})
export class PostModuleModule { }

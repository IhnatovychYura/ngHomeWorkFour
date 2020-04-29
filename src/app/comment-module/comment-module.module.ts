import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentModuleRoutingModule } from './comment-module-routing.module';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {PostOfCommentComponent} from '../post-module/components/post-of-comment/post-of-comment.component';


@NgModule({
  declarations: [
    AllCommentsComponent,
    CommentComponent,
    PostOfCommentComponent
  ],
  imports: [
    CommonModule,
    CommentModuleRoutingModule
  ]
})
export class CommentModuleModule { }

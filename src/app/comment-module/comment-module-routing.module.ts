import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {AllCommentsResolverService} from './services/all-comments-resolver.service';
import {PostOfCommentComponent} from '../post-module/components/post-of-comment/post-of-comment.component';


const routes: Routes = [
  // FatherPath URL: localhost:4222/posts/1/comments;
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: AllCommentsResolverService}},
  // FatherPath URL: localhost:4222/comments; ChildPath URL: localhost:4222/comments/1/posts
  {path: '', component: AllCommentsComponent, resolve: {allComments: AllCommentsResolverService}, children: [
      {path: ':postId/posts', component: PostOfCommentComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentModuleRoutingModule { }

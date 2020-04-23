import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { AllUsersResolverService } from './services/all-users-resolver.service';
import { AllPostsResolverService } from './services/all-posts-resolver.service';
import { AllCommentsResolverService } from './services/all-comments-resolver.service';
import {CommentResolverService} from './services/comment-resolver.service';
import {PostOfCommentComponent} from './post-of-comment/post-of-comment.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: AllUsersResolverService}, children: [
    {path: ':id/posts', component: AllPostsComponent}
    ]},
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: AllPostsResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent, resolve: {comment: CommentResolverService}}
    ]},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: AllCommentsResolverService}, children: [
      {path: ':postId/posts', component: PostOfCommentComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    MainPageComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    PostOfCommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

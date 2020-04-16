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
import { UserResolverService } from './services/user-resolver.service';
import { PostResolverService } from './services/post-resolver.service';
import { CommentResolverService } from './services/comment-resolver.service';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService} },
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolverService} },
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService} },
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

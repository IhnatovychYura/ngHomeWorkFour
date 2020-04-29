import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutingModule} from './app-routing.module';

// Варіант без Routing.Modules
//  const routes: Routes = [
//  {path: '', component: MainPageComponent},
//  {path: 'users', component: AllUsersComponent, resolve: {allUsers: AllUsersResolverService}, children: [
//    {path: ':id/posts', component: AllPostsComponent}
//    ]},
//  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: AllPostsResolverService}, children: [
//      {path: ':id/comments', component: AllCommentsComponent, resolve: {comment: CommentResolverService}}
//    ]},
//  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: AllCommentsResolverService}, children: [
//      {path: ':postId/posts', component: PostOfCommentComponent}
//    ]},
//  ];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

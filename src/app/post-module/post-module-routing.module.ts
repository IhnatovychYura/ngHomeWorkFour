import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {AllPostsResolverService} from './services/all-posts-resolver.service';


const routes: Routes = [
  // FatherPath URL: localhost:4222/users/1/posts;
  {path: 'posts', component: AllPostsComponent},
  // FatherPath URL: localhost:4222/posts; ChildPath URL: localhost:4222/posts/1
  {path: '', component: AllPostsComponent, resolve: {allPosts: AllPostsResolverService}, children: [
      {path: ':id', loadChildren: () => import('../comment-module/comment-module.module').then(m => m.CommentModuleModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }

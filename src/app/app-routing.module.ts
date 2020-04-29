import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule)},
  {path: 'posts', loadChildren: () => import('./post-module/post-module.module').then(m => m.PostModuleModule)},
  {path: 'comments', loadChildren: () => import('./comment-module/comment-module.module').then(m => m.CommentModuleModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

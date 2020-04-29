import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {AllUsersResolverService} from './services/all-users-resolver.service';


const routes: Routes = [
  // FatherPath URL: localhost:4222/users; ChildPath URL: localhost:4222/users/1
  {path: '', component: AllUsersComponent, resolve: {allUsers: AllUsersResolverService}, children: [
      {path: ':id', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../models/PostModel';
import {PostService} from './post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPostsResolverService implements Resolve<PostModel[]> {

  constructor(private postService: PostService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    return this.postService.getPosts();
  }
 // const id = route.queryParamMap.get('idOfUser');
 // return this.postService.getPosts(+id);
}

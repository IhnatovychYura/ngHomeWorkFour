import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../../models/CommentModel';
import {CommentService} from './comment.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCommentsResolverService implements Resolve<CommentModel[]> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[]
  {
    const id = route.paramMap.get('id');
    // const id = route.queryParamMap.get('idOfComment');
    // через state вже не можна
    if (id) {
      return this.commentService.getComment(id);
    } else {
      return this.commentService.getComments();
    }
  }
}

import {Component, Input} from '@angular/core';
import {CommentModel} from '../../models/CommentModel';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input()
  comment: CommentModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  navigate(comment: CommentModel) {
    this.router.navigate([comment.postId, 'posts'], {
      state: {comment},
      queryParams: {postIdOfComment: comment.postId},
      relativeTo: this.activatedRoute
    });
  }
}

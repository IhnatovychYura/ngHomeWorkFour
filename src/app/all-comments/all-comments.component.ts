import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  // render resolver
    this.comments = this.activatedRoute.snapshot.data.allComments;

    // render comments of one post
    this.activatedRoute.params.subscribe(params => {
      if (!!params.id) {
        this.commentService.getComment(params.id).subscribe(commentFromServer => {
          this.comments = commentFromServer;
        });
      }
    });

    // Це ВАРІАНТ через CommentResolverService - але працює в мене погано через те, що я не знаю як правильно написати щоб data не
    // переписувала comments
   // this.activatedRoute.data.subscribe(params => {
   //    if (!!params){
   //    this.comments = params.comment;
   //    }
   //  });
  }

  ngOnInit(): void {
  }

}

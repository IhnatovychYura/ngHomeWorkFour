import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {

    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.data.subscribe(params => {
        this.comments = params.allComments;
      });
    } else {
        this.comments = this.activatedRoute.snapshot.data.allComments;
    }
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

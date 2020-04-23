import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-of-comment',
  templateUrl: './post-of-comment.component.html',
  styleUrls: ['./post-of-comment.component.css']
})

export class PostOfCommentComponent implements OnInit {

 posts: PostModel[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
        this.postService.getPostOfComment(queryParams.postIdOfComment).subscribe(postFromServer => {
          this.posts = postFromServer;
        });
    });
  }

  ngOnInit(): void {
  }

}


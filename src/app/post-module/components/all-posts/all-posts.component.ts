import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    if (this.activatedRoute.snapshot.params.id)  {
      this.activatedRoute.params.subscribe(params => {
          this.postService.getPost(params.id).subscribe(postFromServer => {
            this.posts = postFromServer;
          });
    });
    } else {
    this.posts = this.activatedRoute.snapshot.data.allPosts;
    }

  }

  ngOnInit(): void {
  }

}

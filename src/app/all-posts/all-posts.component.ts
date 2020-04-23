import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    // render resolver
      this.posts = this.activatedRoute.snapshot.data.allPosts;

    // render post of user
      this.activatedRoute.params.subscribe(params => {
        // якщо в params передається id => тоді виконується запит, а
        // без if в params буде падати null і posts буде завжди переписуватись в null
        if (!!params.id){
          this.postService.getPost(params.id).subscribe(postFromServer => {
            this.posts = postFromServer;
          });
        }
    });
  }

  ngOnInit(): void {
  }

}

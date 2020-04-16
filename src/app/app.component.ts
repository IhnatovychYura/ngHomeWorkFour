import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  msg = 'Yura Ihnatovych';

  constructor() {
  };
/**
 * users: UserModel[];
 * posts: PostModel[];
 * comments: CommentModel[];
 *
 * Цей варіант діяв до того як ми його перенесли в User.service
 *
 *  constructor(private http: HttpClient) {
 *   this.greeting();
 *    this.http.get<UserModel[]>('http://jsonplaceholder.typicode.com/users').subscribe(value => {
 *      console.log(value);
 *      this.users = value;
 *  });
 * }
 * constructor(private userService: UserService, private postService: PostService, private commentService: CommentService){
 * this.userService.getUsers().subscribe(valueU => {console.log('subs', valueU); this.users = valueU;
 * });
 * this.postService.getPosts().subscribe(valueP => this.posts = valueP);
 * this.commentService.getComments().subscribe(valueC => this.comments = valueC);
 * }
 * */

}

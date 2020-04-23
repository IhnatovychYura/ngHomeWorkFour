import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];

  constructor(private activateRoute: ActivatedRoute) {
    this.users = this.activateRoute.snapshot.data.allUsers;
  }
  ngOnInit(): void {
  }

}

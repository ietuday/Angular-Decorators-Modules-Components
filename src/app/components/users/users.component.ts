import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from '../../interfaces/user';
import { UserService } from '../../services/user/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<IUser>;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    //  this.activatedRoute.data.forEach((data) => {
    //    console.log(data);
    //    this.users = data.users;
    //  })

    this.userService.getUsersViaREST().subscribe((users) => {
      this.users = users;
    });
  }

}

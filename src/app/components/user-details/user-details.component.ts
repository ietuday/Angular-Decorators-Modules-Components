import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:any;

  users: Array<IUser>;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.users = this.userService.getUsers();

    this.activateRoute.params.subscribe((params) => {
      this.user = this.users.filter((user) => user.id === +params.id)[0];
    });

    this.activateRoute.queryParams.subscribe((qs) => {
      console.log(`Got the qs as: `,qs);
      
    })
  }

}

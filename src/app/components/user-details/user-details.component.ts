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
  user: IUser;
  posts:any;
  users: Array<IUser>;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.users = this.userService.getUsers();

    // this.activateRoute.params.subscribe((params) => {
    //   this.user = this.users.filter((user) => user.id === +params.id)[0];
    // });

    // this.activateRoute.params.subscribe((params) => {
    //   this.user = this.userService.getUserById(+params['id']);
    // });


    this.activateRoute.params.subscribe((params) => {
      this.userService.getUserByIdREST(+params['id']).subscribe((user) => {
        this.user = user;
      })
    });

    // Using promises
    // this.activateRoute.params.toPromise()
    //   .then((user) => {
    //     this.user = <IUser>user;
    //   })

    // this.activateRoute.params.subscribe((params) => {
    //   this.userService.getUserByIdREST(+params['id']).subscribe(
    //     user => this.user = user,
    //     err =>  console.log('Got an error while fetching the user',err),
    //     () => alert('Featch of user is completed!')
    //   )
    // });


    this.activateRoute.queryParams.subscribe((qs) => {
      console.log(`Got the qs as: `, qs);

    })
  }

  createUser() {
    this.user.id = null;
    // this.userService.createUser(this.user).subscribe(
    //   user => alert(`A new user was created with an id: ${user.id}`),
    //   err => alert(`Got an error as: ${err}`),
    //   ()=> alert('Creation of user is completed')
    // );

    this.userService.createUser(this.user).subscribe((user) =>{
      alert(`A new user was created with an id: ${user.id}`)
    },(err)=> {
      alert(`Got an error as: ${err}`)
    }, (() => {
      alert('Creation of user is completed')
    }));

  }

  updateUser() {
    this.user.name = 'Sam kolder';
    this.user.email = 'sam.kolher@example.com'

    this.userService.updateUser(this.user).subscribe((user) =>{
      alert(`The user was updated`)
    },(err)=> {
      alert(`Got an error as: ${err}`)
    }, (() => {
      alert('Updation of user is completed')
    }));  
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe((user) =>{
      alert(`The user was deleted`)
    },(err)=> {
      alert(`Got an error as: ${err}`)
    },(() => {
      alert('Deletetion of user is completed')
    }));  
  }

  getUserPosts() {
   this.posts =  this.userService.getUserPosts(this.user.id)
  }

}

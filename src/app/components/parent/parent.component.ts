import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../interfaces/user';
import { Laptop } from '../../classes/laptop';
import { HookLogger, ReadOnly } from '../../decorators/class.decorator';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
@HookLogger({
  hooks: ['ngAfterViewInit', 'ngOnInit']
})
export class ParentComponent implements OnInit, AfterViewInit {
  // counter:number = 0;
  // // @ViewChild(ChildComponent) child: ChildComponent;
  user: { name: string } = { name : 'Jacob'};
  dateToday:string;
  users:IUser[];
  filterIdType:string = '';
  @ReadOnly('This is a readonly string and will not change!') readonly:string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dateToday = new Date().toDateString();
    this.users = this.userService.getUsers();
    let laptop: Laptop = new Laptop();
    // console.log(laptop['stickers']);
    console.log(this.readonly);
    this.readonly = 'This was changed';
    console.log(this.readonly);
  }

  ngAfterViewInit(){
  // //   setTimeout(() => {
  // //     console.log(this.child.count);
  // //   });
  }

  // oncouterChanged(event){
  //   this.counter = event
  // }

  changeProperty(){
    this.user.name = 'sam';
  }

  changeObject(){
    this.user = { name: 'Tom'}
  }

  addUser(){
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacob Riglin',
      email: 'jacob@gmail.com'
    });
  }

  

}

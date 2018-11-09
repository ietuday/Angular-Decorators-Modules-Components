import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit,OnDestroy {
  prop:string;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.propChanged.subscribe(
      prop => this.prop = prop,
      err => console.log('got an error as : ',err),
      () => alert('The Observable was completed')
      );
  }

  changeProp(){
    this.userService.setProp('Bar');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

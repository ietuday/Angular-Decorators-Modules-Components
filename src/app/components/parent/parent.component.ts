import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  // counter:number = 0;
  // // @ViewChild(ChildComponent) child: ChildComponent;
  user: { name: string } = { name : 'Jacob'};
  dateToday:string;

  constructor() { }

  ngOnInit() {
    this.dateToday = new Date().toDateString();
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

  

}

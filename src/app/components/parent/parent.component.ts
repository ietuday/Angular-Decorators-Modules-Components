import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  counter:number = 0;
  // @ViewChild(ChildComponent) child: ChildComponent;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  //   setTimeout(() => {
  //     console.log(this.child.count);
  //   });
  }

  oncouterChanged(event){
    this.counter = event
  }

}

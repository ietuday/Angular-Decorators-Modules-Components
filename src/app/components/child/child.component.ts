import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  count:number = 0;
  @Output() couterChanged:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onIncrement(){
    // this.count++;
    this.couterChanged.emit(++this.count);
  }

  onDecrement(){
    this.count--;
    this.couterChanged.emit(--this.count);
  }



}

import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // @Input() message:string;
  @Input() message: string;
  @Input() index: number;
  @Output() messageDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log(`Message Contructor : Message = ${this.message} & index = ${this.index}`);

  }

  // // ngOnchanges(){

  // // }

  // ngOnInit() {
  //   console.log(`Message Ngonit : Message = ${this.message} & index = ${this.index}`);

  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.message}`);

    for (let key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.message}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }



  delete() {
    console.log('click', this.index);

    this.messageDeleted.emit(this.index);

  }

}

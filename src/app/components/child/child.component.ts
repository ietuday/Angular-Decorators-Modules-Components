import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  // count:number = 0;
  // @Output() couterChanged:EventEmitter<number> = new EventEmitter<number>();
  @Input() user: { name: string };
  
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  onIncrement(){
    // this.count++;
    // this.couterChanged.emit(++this.count);
  }

  onDecrement(){
    // this.count--;
    // this.couterChanged.emit(--this.count);
  }



}

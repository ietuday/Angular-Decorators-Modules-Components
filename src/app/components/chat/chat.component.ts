import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  title: string = 'The Chat Component is working';
  titleBinding: string = 'The Chat Component is working';
  twoWayBinded:string = 'This is binded two ways';
  
  constructor() { }

  ngOnInit() {
  }

  getData(){
    console.log('click');
    
  }

}

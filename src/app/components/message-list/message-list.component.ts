import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, ContentChildren } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit,AfterViewInit {
  
  @ViewChild(MessageComponent) messageComponent: MessageComponent;
  @ViewChildren(MessageComponent) AllmessageComponent: QueryList<MessageComponent>;

  @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;
  @ContentChild('tempMessage') tempProjectedMessageComponent: MessageComponent;
  @ContentChildren(MessageComponent) allFirstProjectedMessageComponent: QueryList<MessageComponent>;


  messageList: string[] = [
    'hi',
    'hello',
    'bye'
  ];

  
  constructor() { 
    
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.messageComponent.message = 'Changed Message from MessageList Component';  
      this.AllmessageComponent.toArray().forEach(message => {
        console.log(message);
        message.message = 'Changed Message from MessageList Component';  
      });
      this.tempProjectedMessageComponent.message =' Changed from temp Reference';
      // this.firstProjectedMessageComponent.message = 'Changed ContentChild';
      // this.allFirstProjectedMessageComponent.toArray().forEach((message)=> {
      //   message.message = 'Changed Content';
      // })
    });
  }

}

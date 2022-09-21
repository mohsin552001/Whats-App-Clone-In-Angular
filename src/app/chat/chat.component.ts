import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  constructor() {}

  ngOnInit(): void {}
  submitMessage(event: any) {
    let value = event.target.value;
    event.target.value = '';

    this.conversation.messages.unshift({
      id: 1,
      body: value,

      time: '10:22',
      me: true,
    });
  }
}

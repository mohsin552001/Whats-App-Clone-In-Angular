import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversatins: {
    name: string;
    time: string;
    latestMessage: string;
    latestMessageRead: boolean;
    messages?: { id: number; body: string; time: string; me: boolean }[];
  }[] = [
    {
      name: 'David',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'jonson',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },

    {
      name: 'vickey',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'Rahul',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'john',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'Smith Gold',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },

    {
      name: 'Harry Potter',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'loccy',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'joanca',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'steve smith',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: 'David',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
    {
      name: ' Finch',
      time: '8:22',
      latestMessage: 'Good Morngin!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:44', me: false },
        { id: 1, body: 'Hello world', time: '8:44', me: true },
        { id: 2, body: 'how are you', time: '8:44', me: false },
        { id: 3, body: 'Oh where are you going', time: '8:44', me: true },
        { id: 4, body: 'Welcome to pakistan', time: '8:44', me: true },
        { id: 5, body: 'let me know', time: '8:44', me: false },
        { id: 6, body: 'this is the pakistan', time: '8:44', me: true },
        { id: 7, body: 'world progress', time: '8:44', me: false },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

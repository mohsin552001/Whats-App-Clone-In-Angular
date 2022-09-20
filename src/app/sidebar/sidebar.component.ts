import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  conversatins = [
    { name: "David", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: true },
    { name: "jonson", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: false },

    { name: "vickey", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: true },
    { name: "Rahul", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: false },
    { name: "john", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: true },
    { name: "Smith Gold", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: false },

    { name: "Harry Potter", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: true },
    { name: "loccy", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: false },
    { name: "joanca", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: true },
    { name: "steve smith", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: false },
    { name: "David", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: true },
    { name: " Finch", time: '8:22', latestMessage: "Good Morngin!!", latestMessageRead: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

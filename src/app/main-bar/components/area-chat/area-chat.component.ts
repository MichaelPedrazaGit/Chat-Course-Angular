import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area-chat',
  templateUrl: './area-chat.component.html',
  styleUrls: ['./area-chat.component.scss']
})
export class AreaChatComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}

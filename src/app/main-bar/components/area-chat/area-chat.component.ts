import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-area-chat',
  templateUrl: './area-chat.component.html',
  styleUrls: ['./area-chat.component.scss']
})
export class AreaChatComponent implements OnInit {
  @Input() user: any;
  constructor(private webSocket: WebSocketService) { }

  ngOnInit(): void {
    this.webSocket.onNewMessage().subscribe((val: any) => {
      if (val.data != ''){
        this.user.messages.push({mensaje: JSON.parse(val.data), sended: 0});
      }
    });
  }
}

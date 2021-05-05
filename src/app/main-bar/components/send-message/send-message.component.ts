import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  @Input() user: any;
  mensaje = '';

  constructor() { }

  ngOnInit(): void {
  }


  cambio(): void{
    this.user.messages.push(this.mensaje);
    this.mensaje = '';
  }

}

import { Component, OnInit, Input} from '@angular/core';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  @Input() user: any;
  mensaje = '';

  constructor(private webSocket: WebSocketService) { }

  ngOnInit(): void {
  }
  cambio(): void{
    if (this.mensaje != ''){
      this.user.messages.push({mensaje: this.mensaje, sended: 1});
      this.webSocket.sendMessage(this.mensaje);
      this.mensaje = '';
    }else{
      alert('NECESITA ESCRIBIR ALGUN MENSAJE PARA PODER ENVIAR')
    }
  }
  tecla(evento: any): void{
    if (evento.code === 'Enter') this.cambio();
  }

}

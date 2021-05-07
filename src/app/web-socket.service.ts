import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  handler: WebSocket;

  constructor() {
    this.handler =  new WebSocket('wss://webskocet.herokuapp.com/');
   }

   // tslint:disable-next-line: comment-format
   //Send Message
   sendMessage(message: string): void{
     this.handler.send(message);
   }

   onNewMessage(): Observable<any> {
     return new Observable(observer => {
       this.handler.onmessage = (msg => {
         observer.next(msg);
       });
     });
   }

}

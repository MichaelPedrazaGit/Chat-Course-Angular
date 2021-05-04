import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatMainBarService {

  @Output() showContact = new EventEmitter();
  constructor() { }
}

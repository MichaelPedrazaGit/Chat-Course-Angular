import { Component, OnInit } from '@angular/core';
import { ChatMainBarService } from '../../services/chat-main-bar.service';

@Component({
  selector: 'app-header-chat',
  templateUrl: './header-chat.component.html',
  styleUrls: ['./header-chat.component.scss']
})
export class HeaderChatComponent implements OnInit {

  name = '';
  photo = '';
  constructor( private service: ChatMainBarService) { }

  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.name = val.contact.name;
      this.photo = (val.generalPhoto + val.contact.name);
    });
  }
  // ngOnDestroy(): void{
  //   this.service.showContact.unsubscribe();
  // }

}

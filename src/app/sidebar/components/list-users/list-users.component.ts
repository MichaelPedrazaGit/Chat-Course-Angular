import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatMainBarService } from 'src/app/main-bar/services/chat-main-bar.service';
// import { Contact } from './lcontact';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
// timejs libreria
// export class ContactListComponent implements OnInit {
  export class ListUsersComponent implements OnInit {
  @Output() selectUser = new EventEmitter();
  todayDate: Date = new Date();
  // contactTest: Contact = {
  //   name: 'Michael',
  //   photo: '',
  //   lastMessage: '',
  //   lastDate: new Date()

  // }

  list = [
    {
      name: 'Michael',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Michael',
      lassMessage: 'Message 1',
      lastDate : new Date(),
      message: []
    },
    {
      name: 'Andres',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Andres',
      lassMessage: 'Message 2',
      lastDate : new Date(2021, 4, 2),
      message: []
    },
    {
      name: 'Erick',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Erick',
      lassMessage: 'Message 3',
      lastDate : new Date(2021, 3, 3),
      message: []
    },
    {
      name: 'Jhonatan',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Jhonatan',
      lassMessage: 'Message 4',
      lastDate : new Date(2020, 3, 2),
      message: []
    },
    {
      name: 'Jhon',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Jhon',
      lassMessage: 'Message 5',
      lastDate : new Date(2021, 2, 2),
      message: []
    },
    {
      name: 'Cristian',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Cristian',
      lassMessage: 'Message 6',
      lastDate : new Date(2021, 0, 20),
      message: []
    }
  ];
  constructor(private service: ChatMainBarService) { }

  showChats(contact: any): void {
    this.service.showContact.emit(contact);
    this.selectUser.emit(contact);
  }

  checkToday(lastDate: Date): boolean {
    return this.todayDate.getDate() === lastDate.getDate()    &&
    this.todayDate.getMonth() === lastDate.getMonth()  &&
    this.todayDate.getFullYear() === lastDate.getFullYear();
  }
  checkYestarday(lastDate: Date): boolean {
    return (this.todayDate.getDate() - 1) === lastDate.getDate()    &&
    this.todayDate.getMonth() === lastDate.getMonth()  &&
    this.todayDate.getFullYear() === lastDate.getFullYear();
  }
  checkOther(lastDate: Date): boolean {
    return this.checkToday(lastDate) ? false : this.checkYestarday(lastDate) ? false :
    lastDate.getDate()   <= this.todayDate.getDate() ||
    lastDate.getDate()   >= this.todayDate.getDate() &&
    lastDate.getMonth()        <= this.todayDate.getMonth()  &&
    lastDate.getFullYear()     <= this.todayDate.getFullYear();
  }



  ngOnInit(): void {
    console.log("Time 12")
  }

}

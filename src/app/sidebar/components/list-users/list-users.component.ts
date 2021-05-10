import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatMainBarService } from 'src/app/main-bar/services/chat-main-bar.service';
import { ChatSideBarServiceService } from '../../services/chat-side-bar-service.service';

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
  generalPhoto = 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=';
  // contactTest: Contact = {
  //   name: 'Michael',
  //   photo: '',
  //   lastMessage: '',
  //   lastDate: new Date()

  // }

  list: any = [];
  constructor(private service: ChatMainBarService, private http: HttpClient, private serviceSideBar: ChatSideBarServiceService) { }

  showChats(contact: any): void {
    this.selectUser.emit(contact);
    this.service.showContact.emit({contact: contact, generalPhoto: this.generalPhoto});
    
    // console.log(this.list);
  }

  // checkToday(lastDate: Date): boolean {
  //   return this.todayDate.getDate() === lastDate.getDate()    &&
  //   this.todayDate.getMonth() === lastDate.getMonth()  &&
  //   this.todayDate.getFullYear() === lastDate.getFullYear();
  // }
  // checkYestarday(lastDate: Date): boolean {
  //   return (this.todayDate.getDate() - 1) === lastDate.getDate()    &&
  //   this.todayDate.getMonth() === lastDate.getMonth()  &&
  //   this.todayDate.getFullYear() === lastDate.getFullYear();
  // }
  // checkOther(lastDate: Date): boolean {
  //   return this.checkToday(lastDate) ? false : this.checkYestarday(lastDate) ? false :
  //   lastDate.getDate()   <= this.todayDate.getDate() ||
  //   lastDate.getDate()   >= this.todayDate.getDate() &&
  //   lastDate.getMonth()        <= this.todayDate.getMonth()  &&
  //   lastDate.getFullYear()     <= this.todayDate.getFullYear();
  // }
  addGroup(): void{
    if (this.list.length > 0){
      this.list.forEach((valorA: any) => {
        valorA.group = 0;
      });
    }
    this.list.unshift({name: 'Group', group: 1});
  }

  addMessages(): void{
    if (this.list.length > 0){
      this.list.forEach((valorA: any) => {
        valorA.messages = [];
      });
    }
  }

  ngOnInit(): void {
    this.serviceSideBar.getUsers().then(users =>{
      this.list = users;
      this.addGroup();
      this.addMessages();
    });
  }

}



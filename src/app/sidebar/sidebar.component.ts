import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() selectUser = new EventEmitter();

  tema = "holaMundo";
  constructor() { }

  saludar(): void {
    console.log("¡Hola Mundo!");
  }

  onSelectUser(contact: any): void{
    this.selectUser.emit(contact);
  }

}


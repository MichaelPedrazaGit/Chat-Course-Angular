import { AfterViewInit, Component, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{


  title = 'chat';
  user: any = {};

  ngAfterViewInit(): void {

    // fromEvent<MouseEvent>(document, 'click')
    //   .pipe(map((ev ) => ))
    //   .subscribe(ev => {
    //     console.log(ev);
    //   });

  }

  onSelectUser(contact: any): void{
    this.user = contact;
  }

}



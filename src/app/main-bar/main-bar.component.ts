import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}

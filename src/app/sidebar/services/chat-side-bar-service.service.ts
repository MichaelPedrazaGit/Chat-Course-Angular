import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../user';
@Injectable({
  providedIn: 'root'
})
export class ChatSideBarServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { SendMessageComponent } from './main-bar/components/send-message/send-message.component';
import { HeaderChatComponent } from './main-bar/components/header-chat/header-chat.component';
import { ListUsersComponent } from './sidebar/components/list-users/list-users.component';
import { AreaChatComponent } from './main-bar/components/area-chat/area-chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainBarComponent,
    SendMessageComponent,
    HeaderChatComponent,
    ListUsersComponent,
    AreaChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

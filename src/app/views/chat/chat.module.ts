import { ChatService } from './../../core/services/chat/chat.service';
import { DataService } from './../../core/services/data/data.service';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdButtonModule, MdIconModule, MdListModule } from '@angular/material';
import { FooterComponent } from './../share/footer/footer.component';
import { NavBarComponent } from './../share/nav-bar/nav-bar.component';
import { ChatComponent } from './chat.component';
import { chatRoutes } from './chat.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chatRoutes),
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [ChatComponent, NavBarComponent, FooterComponent],
  providers: [DataService, ChatService]
})
export class ChatModule { }

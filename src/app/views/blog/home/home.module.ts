import { UserService } from './../../../core/services/user/user.service';
import { DataService } from './../../../core/services/data/data.service';
import { ChatService } from './../../../core/services/chat/chat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { MenuModule } from './../../share/menu/menu.module';
import { MenuComponent } from './../../share/menu/menu.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { homeRoutes } from './home.routes';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdIconModule, MdToolbarModule, MdCardModule, MdButtonModule, MdListModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes),
        MdIconModule,
        MdToolbarModule,
        MdButtonModule,
        MdCardModule,
        FlexLayoutModule,
        InfiniteScrollModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MenuModule
    ],
    declarations: [HomeComponent, ListArticleComponent, ArticleComponent, ChatComponent],
    providers: [ChatService, DataService, UserService]
})
export class HomeModule { }

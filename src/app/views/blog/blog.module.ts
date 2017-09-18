import { ArticleDetailModule } from './article-detail/article-detail.module';
import { FooterComponent } from './../share/footer/footer.component';
import { DataService } from './../../core/services/data/data.service';
import { BlogComponent } from './blog.component';
import { NavBarComponent } from './../share/nav-bar/nav-bar.component';
import { blogRoutes } from './blog.routes';

import { MdGridListModule, MdIconModule, MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes),
    MdGridListModule,
    MdIconModule,
    MdToolbarModule,
    ArticleDetailModule

  ],
  declarations: [BlogComponent, NavBarComponent, FooterComponent],
  providers: [DataService]
})
export class BlogModule { }

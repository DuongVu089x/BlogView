import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { BlogComponent } from './blog.component';
import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
    {
        path: '', component: BlogComponent, children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home', loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'user', loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'article-details/:id', component: ArticleDetailComponent
            }
        ]
    }
]

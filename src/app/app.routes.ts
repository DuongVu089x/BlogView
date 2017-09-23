import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '', redirectTo: 'blog', pathMatch: 'full'
    },
    {
        path: 'blog', loadChildren: './views/blog/blog.module#BlogModule'
    },
    {
        path: 'chat', loadChildren: './views/chat/chat.module#ChatModule'
    }
]

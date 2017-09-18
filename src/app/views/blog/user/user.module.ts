import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import { MdCardModule, MdTabsModule } from '@angular/material';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'app/views/blog/home/home.module';
import { RegisterComponent } from './register/register.component';

export const userRoutes: Routes = [
    {
        path: '', component: UserComponent, children: [
            {
                path: '', redirectTo: 'login'
            },
            {
                path: 'login', loadChildren:'./login/login.module#LoginModule'
            },
            {
                path: 'register', loadChildren:'./register/register.module#RegisterModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        MdCardModule,
        MdTabsModule,
        FlexLayoutModule
    ],
    declarations: [UserComponent],
    //providers: [DataService]
})
export class UserModule { }

import { AuthenticationService } from './../../../../core/services/authentication/authentication.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdInputModule, MdIconModule, MdToolbarModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { HomeModule } from 'app/views/blog/home/home.module';

export const loginRoutes: Routes = [
    {
        path: '', component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        MdInputModule,
        MdIconModule,
        MdButtonModule,
        MdCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        RouterModule.forChild(loginRoutes)
    ],
    declarations: [LoginComponent],
    providers: [AuthenticationService],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }

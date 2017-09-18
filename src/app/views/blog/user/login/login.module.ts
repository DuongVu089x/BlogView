import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from "app/views/blog/home/home.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdIconModule, MdToolbarModule, MdButtonModule, MdCheckboxModule } from "@angular/material";

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
    providers: [],
    exports:[
        LoginComponent
    ]
})
export class LoginModule { }

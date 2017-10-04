import { EqualValidator } from './../../../../core/directives/equal-validator.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'app/views/blog/home/home.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdFormFieldModule } from "@angular/material";

export const loginRoutes: Routes = [
    {
        path: '', component: RegisterComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdInputModule,
        MdGridListModule,
        MdIconModule,
        MdToolbarModule,
        MdButtonModule,
        MdCheckboxModule,
        MdFormFieldModule,
        MdTabsModule,
        FlexLayoutModule,
        RouterModule.forChild(loginRoutes)
    ],
    declarations: [RegisterComponent, EqualValidator],
    providers: [],
    exports: [
        RegisterComponent
    ]
})
export class RegisterModule { }

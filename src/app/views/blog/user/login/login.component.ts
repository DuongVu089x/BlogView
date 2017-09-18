import { UserModel } from './../../../../core/models/user.models';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { MdTabChangeEvent } from "@angular/material";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  icon = "visibility";
  isActive = true;

  loginForm: FormGroup;
  user: UserModel;
  errorMessage = "";
  password = "";
  constructor() { }

  ngOnInit() {
  }

  changeIcon() {
    if (this.isActive) {
      this.icon = "visibility";
    } else {
      this.icon = "visibility_off";
    }
    this.isActive = !this.isActive;
  }

  login() {
    console.log("Login");
  }
}

import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserModel } from './../../../../core/models/user.models';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  iconPassword = "visibility";
  iconConfirmPassword = "visibility";
  isActivePasword = true;
  isActiveConfirmPassword = true;

  registerForm: FormGroup;
  public user = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  constructor() {

  }

  ngOnInit() {
  }

  changeIcon(type: number) {
    switch (type) {
      case 1:
        // if (this.isActivePasword) {
        //   this.iconPassword = "visibility";
        // } else {
        //   this.iconPassword = "visibility_off";
        // }
        // this.isActivePasword = !this.isActivePasword;
        this.changeStatus(this.isActivePasword, this.iconPassword);
        break;
      case 2:
        // if (this.isActiveConfirmPassword) {
        //   this.iconConfirmPassword = "visibility";
        // } else {
        //   this.iconConfirmPassword = "visibility_off";
        // }
        // this.isActiveConfirmPassword = !this.isActiveConfirmPassword;
        this.changeStatus(this.isActiveConfirmPassword, this.iconConfirmPassword)
        break;
    }
  }

  private changeStatus(isActive: boolean, icon: string) {
    if (isActive) {
      icon = "visibility";
    } else {
      icon = "visibility_off";
    }
    isActive = !isActive;
  }

  checkComfirmPassword(password: string): boolean {
    return this.user.password === password;
  }
  login() {

  }
}

import { AuthenticationService } from './../../../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { SystemConstants } from 'app/core/commons/system.constants';
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

  iconPassword = 'visibility';
  iconConfirmPassword = 'visibility';
  isActivePasword = true;
  isActiveConfirmPassword = true;

  registerForm: FormGroup;
  error: any;
  public user = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private _authenticationService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {
  }

  changeIcon(type: number) {
    switch (type) {
      case 1:
        if (this.isActivePasword) {
          this.iconPassword = 'visibility';
        } else {
          this.iconPassword = 'visibility_off';
        }
        this.isActivePasword = !this.isActivePasword;
        break;
      case 2:
        if (this.isActiveConfirmPassword) {
          this.iconConfirmPassword = 'visibility';
        } else {
          this.iconConfirmPassword = 'visibility_off';
        }
        this.isActiveConfirmPassword = !this.isActiveConfirmPassword;
        break;
    }
  }

  register() {
    this._authenticationService.register(this.user)
      .then((res: any) => {
        this.user = res;
        this.router.navigate(['/blog/user/login']);
      }, err => {
        this.error = JSON.parse(err._body).message;
      });
  }
}

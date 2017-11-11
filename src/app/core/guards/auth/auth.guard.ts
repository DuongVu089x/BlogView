import { UrlConstants } from './../../commons/url.constants';
import { SystemConstants } from 'app/core/commons/system.constants';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem(SystemConstants.CURRENT_USER) != null) {
      return true;
    }
    this.router.navigate([UrlConstants.LOGIN], {
      queryParams: {
        returnUrl: state.url
      }
    });
  }
}

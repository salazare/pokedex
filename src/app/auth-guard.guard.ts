import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.loginService.isLogin) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}

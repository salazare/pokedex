import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: any;
  public isLogin: boolean;

  constructor() {
    this.getUser();
  }

  getUser() {
    this.user = localStorage.getItem('local_user');
    if (this.user !== null) {
      this.user = JSON.parse(localStorage.getItem('local_user'));
      this.isLogin = true;
    } else {
      this.user = false;
    }
  }

  setUser(user) {
    localStorage.setItem('local_user', JSON.stringify(user));
  }

  delUser() {
    localStorage.removeItem('local_user');
  }
}

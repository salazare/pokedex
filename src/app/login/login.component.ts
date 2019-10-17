import {Component, OnInit} from '@angular/core';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  private logeado: boolean;

  constructor(private socialAuth: AuthService, private router: Router, private login: LoginService) {
  }

  googleIn() {
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuth.signOut();
  }

  ngOnInit() {
    this.socialAuth.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.login.setUser(user);
      this.logeado = (user != null);
      if (this.logeado) {
        this.router.navigateByUrl('/');
      }
    });
  }

}

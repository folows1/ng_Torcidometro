import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = {} as User

  constructor(private loginS: LoginService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginS.login(this.newUser);
  }
}

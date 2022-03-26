import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = {} as User

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (this.newUser.password === 'admin' && this.newUser.username === 'admin') {
      console.log(form.value)
      this.router.navigate(['/register-team'])
    }
  }
}

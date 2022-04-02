import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../interfaces/user";

@Injectable({
    providedIn: "root"
})

export class LoginService {
    private authenticated: boolean = false;

    constructor(private router: Router) { }

    login(user: User) {
        if (user.username === "admin" && user.password === "admin") {
            this.authenticated = true;
            this.router.navigate([""]);
        }
        else {
            alert("Credenciais inválidas!");
            this.router.navigate([""]);
        }
    }

    checkAuthentication() {
        return this.authenticated;
    }
}
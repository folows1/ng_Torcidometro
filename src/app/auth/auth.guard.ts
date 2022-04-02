import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { LoginService } from "../login/login.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private loginS: LoginService) { }

    canActivate(): boolean {
        if (this.loginS.checkAuthentication()) {
            return true;
        }

        this.router.navigate(['error-no-auth']);
        return false;
    }
}

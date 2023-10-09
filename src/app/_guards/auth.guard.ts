﻿import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.authenticationService.whoami().subscribe({
            next: () => { },
            complete: () => { },
            error: error => {
                console.error(error);
                this.authenticationService.logout(state.url);
            }
        });
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser.token) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
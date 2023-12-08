import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let role = inject(LoginService).getUserRole();
  let isLoggedIn = inject(LoginService).isLoggedIn();

  let router = inject(Router);

    if(isLoggedIn && role == 'ADMIN'){
      return true;
    }
    else{
      alert('Invalid User Role')
      router.navigate(['login']);
      return false;
    }
};
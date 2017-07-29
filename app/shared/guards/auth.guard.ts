import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { ConfigService } from '../core/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (ConfigService.isLoggedIn()) {
      console.log('here')
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
   state: import("@angular/router").RouterStateSnapshot): boolean |
          import("@angular/router").UrlTree | import("rxjs").Observable<boolean | 
          import("@angular/router").UrlTree> | Promise<boolean | 
          import("@angular/router").UrlTree> {
    
            return true;
  }
}

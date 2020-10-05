import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanLoad, Route,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../../modules/shared/services/utility.service';
import { LOGIN } from '../../constant/absolute-routes/absolute-routes';

@Injectable() 
export class HomeGuard implements CanActivate,CanLoad {
  constructor(
    private _router:Router,
    private _utilityService:UtilityService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();
    
  }
  
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    if(this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();
  }
  navigate() {
    this._utilityService.clearStorage();
    this._router.navigate([LOGIN]);
    return false;
  }
}

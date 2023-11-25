import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductDetailGuard  {

    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        stats: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const id = Number(route.paramMap.get('id'));
        if (isNaN(id) || id < 1) {
            alert('invalid product id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
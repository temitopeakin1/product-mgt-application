import { Component } from '@angular/core';

// components metadata (@component is a decorator)
@Component({
    selector: 'app-root',
    template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/welcome">
            <img src="assets/images/plogo.png" width="150" />
          </a>
        </div>
        <ul class="nav navbar-nav ml-auto">
          <li><a class="nav-link" routerLink="/home">Home</a></li>
          <li><a class="nav-link" routerLink="/products">Products</a></li>
          <li><a class="nav-link" routerLink="/contact">Contact</a></li>
          <li><a class="nav-link" routerLink="/register">Register</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
    standalone: false
})
export class AppComponent {}

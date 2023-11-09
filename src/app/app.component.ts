import { Component } from '@angular/core';

// components metadata (@component is a decorator)
@Component({
  selector: 'pm-root', // defines the component directives name
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <!-- <a class="navbar-brand">{{ pageTitle }}</a> -->
      <img src="assets/images/plogo.png" width="150"> 
      <ul class="nav">
        <li><a class="nav-link" routerLink="/welcome">Home</a></li>
        <li></li>
        <li><a class="nav-link" routerLink="/products">Product List</a></li>
        <li></li>
        <li><a class="nav-link" routerLink="/contact">Contact</a></li>
        <li></li>
        <li><a class="nav-link" routerLink="/login">Login</a></li>
        <li></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageSrc = 'assets/images/tmegha.png';
}

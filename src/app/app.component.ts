import { Component } from '@angular/core';

// components metadata (@component is a decorator) 
@Component({
  selector: 'pm-root', // defines the component directives name
  template:`
    <nav class = 'navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLink='/welcome'>Home</a><li>
          <li><a class='nav-link' routerLink='/products'>Product List</a><li>
              <li><a class='nav-link' routerLink='/contact'>Contact</a><li>
    </ul>
    </nav>
    <div class="container">
    <router-outlet></router-outlet>
  </div>
      `,
       styleUrls: ['./app.component.css']           
  })

export class AppComponent {
  imageSrc = 'assets/images/tmegha.png'  
  pageTitle: string = '🏬 Product Management App';
}


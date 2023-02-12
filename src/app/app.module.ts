import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'contact-us', redirectTo: 'contact' },
     
    ]),
    ProductModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

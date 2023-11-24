import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductModule } from './products/product.module';
import { SupplierDataComponent } from './suppliers/supplier-data/supplier-data.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    SupplierDataComponent,
    LoginComponent,
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
      { path: 'login', redirectTo: 'login'},
    ]),
    ProductModule,
  ],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductModule } from './products/product.module';
import { SupplierDataComponent } from './suppliers/supplier-data/supplier-data.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    SupplierDataComponent,
    SignupComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'contact-us', redirectTo: 'contact' },
      { path: 'customer', redirectTo: 'customer'},    
    ]),
    ProductModule,
  ],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

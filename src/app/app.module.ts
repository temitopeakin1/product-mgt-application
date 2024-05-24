import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductModule } from './products/product.module';
import { SupplierDataComponent } from './suppliers/supplier-data/supplier-data.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SupplierDataComponent,
    SignupComponent,
    RegisterComponent,
  ],
  // providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
      { path: 'contact-us', redirectTo: 'contact' },
      { path: 'customer', redirectTo: 'customer' },
    ]),
    ProductModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}

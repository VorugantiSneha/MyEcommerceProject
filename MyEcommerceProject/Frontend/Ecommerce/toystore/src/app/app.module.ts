import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCategoryMenuComponent,
    AboutusComponent,
    ContactusComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    WishListComponent,
    OrderHistoryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

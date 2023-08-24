import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AuthGuard } from './guards/auth.guard';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'category', component: ProductCategoryMenuComponent },
  { path: 'category/:id', component: ProductsListComponent },
  { path: 'search/:keyword', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wish-list', component: WishListComponent, canActivate: [AuthGuard] },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

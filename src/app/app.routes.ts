import { Routes } from '@angular/router';
import { ProductsPage } from './products-page/products-page';
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
  { path: '', component: ProductsPage },
  { path: 'cart', component: CartPage },
];

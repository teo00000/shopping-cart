import { Component, OnInit } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ShoppingCart } from '../services/shopping-cart';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductList, AsyncPipe],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage implements OnInit {
  constructor(
    private shoppingCartService: ShoppingCart,
    private cartService: CartService
  ) {}

  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.shoppingCartService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

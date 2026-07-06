import { Component, OnInit } from '@angular/core';
import { ProductList } from '../products-page/product-list/product-list';
import { CartSummary } from './cart-summary/cart-summary';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../services/cart-service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ProductList, CartSummary, AsyncPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  constructor(private cartService: CartService) {}

  products$!: Observable<Product[]>;

  ngOnInit(): void {
    
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  get totalPrice() {
    return this.cartService.totalPrice();
  }
}

import { Component, OnInit } from '@angular/core';
import { CartSummary } from './cart-summary/cart-summary';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../services/cart-service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ CartSummary, AsyncPipe, CommonModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  constructor(private cartService: CartService) {}

  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.cartService.cart$;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartService.deleteFromCart(product);
  }

  get totalPrice() {
    return this.cartService.totalPrice();
  }
}

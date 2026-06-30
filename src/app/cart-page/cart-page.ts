import { Component, OnInit } from '@angular/core';
import { ProductList } from "./product-list/product-list";
import { CartSummary } from "./cart-summary/cart-summary";
import { ProductService } from './product-service';
import { Product } from './models/product';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ProductList, CartSummary, AsyncPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onAddToCart(product: Product) {
    this.productService.addToCart(product);
  }

  onDeleteFromCart(product: Product) {
    this.productService.deleteFromCart(product);
  }

  get totalPrice() {
    return this.productService.totalPrice();
  }
}

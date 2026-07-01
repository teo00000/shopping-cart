import { Component, OnInit } from '@angular/core';
import { ProductList } from '../products-page/product-list/product-list';
import { CartSummary } from './cart-summary/cart-summary';
import { ProductService } from '../products-page/product-service';
import { Product } from '../products-page/models/product';
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

  get totalPrice() {
    return this.productService.totalPrice();
  }
}

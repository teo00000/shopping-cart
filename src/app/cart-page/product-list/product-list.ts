import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input({ required: true })
  products!: Product[];

  @Output()
  addToCart = new EventEmitter<Product>();
  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }

  @Output()
  deleteFromCart = new EventEmitter<Product>();
  onDeleteFromCart(product: Product) {
    this.deleteFromCart.emit(product);
  }
}

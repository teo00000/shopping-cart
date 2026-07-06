import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true })
  product!: Product;

  @Output()
  addToCart = new EventEmitter<Product>();
  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}

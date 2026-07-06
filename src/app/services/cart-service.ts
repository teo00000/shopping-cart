import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const current = this.cartSubject.value;
    this.cartSubject.next([
      ...current,
      product
    ]);
  }

  deleteFromCart(product: Product) {
    const current = this.cartSubject.value;

    const updated = current.filter(
      p => p !== product
    );

    this.cartSubject.next(updated);
  }

  cartCount$ = this.cart$.pipe(
    map(cart => cart.length)
  );

  totalPrice() {
    return this.cartSubject.value.reduce((acc, p) => acc + p.price, 0);
  }
}

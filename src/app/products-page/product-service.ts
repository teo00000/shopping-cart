import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      name: 'Car',
      price: 2000,
    },
    {
      name: 'Laptop',
      price: 1200,
    },
    {
      name: 'Phone',
      price: 800,
    },
    {
      name: 'Fridge',
      price: 600,
    },
  ];

  private cart: Product[] = [];

  private cart$ = new BehaviorSubject<Product[]>(this.cart);

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getCart(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cart$.next(this.cart);
  }

  deleteFromCart(product: Product) {
    this.cart = this.cart.filter((p) => p !== product);
    this.cart$.next(this.cart);
  }

  totalPrice() {
    return this.cart.reduce((acc, p) => acc + p.price, 0);
  }
}

import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      name: "Car",
      price: 2000
    },
    {
      name: "Laptop",
      price: 1200
    },
    {
      name: "Phone",
      price: 800
    },
    {
      name: "Fridge",
      price: 600
    }
  ];

  private products$ = new BehaviorSubject<Product[]>(this.products);

  cart: Product[] = [];

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  deleteFromCart(product: Product) {
    this.cart = this.cart.filter(p => p !== product);
  }

  totalPrice() {
    return this.cart.reduce((acc, p) => acc + p.price, 0);
  }
}

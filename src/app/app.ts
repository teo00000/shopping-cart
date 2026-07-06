import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartPage } from "./cart-page/cart-page";
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartPage, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopping-cart');
}

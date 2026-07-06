import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public cartService: CartService) {}

}

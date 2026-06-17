import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-banner',
  templateUrl: './cart-banner.component.html',
  styleUrls: ['./cart-banner.component.css']
})
export class CartBannerComponent implements OnInit {
  totalItems$!: Observable<number>;
  totalAmount$!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.totalItems$ = this.cartService.totalItems$;
    this.totalAmount$ = this.cartService.totalAmount$;
  }

  sendOrder() {
    const link = this.cartService.generateWhatsAppLink();
    if (link) {
      window.open(link, '_blank');
    }
  }
}

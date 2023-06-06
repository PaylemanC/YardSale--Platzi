import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  myShoppingCart: Product[] = [];
  
  constructor (private shoppingCartService: ShoppingCartService) {
    this.myShoppingCart = this.shoppingCartService.getShoppingCart();
  }

  activeMenu = false;

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}

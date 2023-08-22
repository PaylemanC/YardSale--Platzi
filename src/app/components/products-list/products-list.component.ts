import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  constructor (private shoppingCartService: ShoppingCartService, private productsService: ProductsService) {
    this.myShoppingCart = this.shoppingCartService.getShoppingCart();
  }

  myShoppingCart: Product[] = [];
  total: number = 0;

  @Input() products: Product[] = [];

  onAddToShoppingCart(product: Product) {
    this.shoppingCartService.addProduct(product);
    this.total = this.shoppingCartService.getTotal();
  }

  @Output() loadMore = new EventEmitter();
  onLoadMore() {
    this.loadMore.emit();
  }
  /*
  products: Product[] = [
    {
      id: 1,
      title: 'Candelabro',
      price: 110,
      img: 'https://images.pexels.com/photos/937526/pexels-photo-937526.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600',
      description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.'
    },
    {
      id: 2,
      title: 'Sillón',
      price: 140,
      img: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.'
    },
    {
      id: 3,
      title: 'Cámara vintage',
      price: 94,
      img: 'https://images.pexels.com/photos/1327503/pexels-photo-1327503.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.'
    },
    {
      id: 4,
      title: 'Bicicleta',
      price: 60,
      img: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.'
    },
    {
      id: 5,
      title: 'Globo Terráqueo',
      price: 45,
      img: 'https://images.pexels.com/photos/7634594/pexels-photo-7634594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.'
    }
  ];
  */


}

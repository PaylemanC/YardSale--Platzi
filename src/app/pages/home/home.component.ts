import { Component } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  template: `<app-products-list [products]="products" (loadMore)="onLoadMore()"></app-products-list>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  limit = 10;
  offset = 0;
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductsByPage(15, 0)
    .subscribe(data => {
      // console.log(data);
      this.products = data;
      this.offset += this.limit;
    });
  }

  onLoadMore() {
    this.productsService.getProductsByPage(this.limit, this.offset).subscribe(data => {
      // console.log(data);
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}

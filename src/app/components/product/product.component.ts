import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor() { }

  @Input() public product: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    category: {
      id: '0',
      name: ''
    },
    description: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}

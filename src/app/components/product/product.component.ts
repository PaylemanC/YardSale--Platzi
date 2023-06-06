import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor() { }

  @Input() public product: Product = {
    id: 0, 
    title: '',
    price: 0,
    img: '',
    description: ''
  }
}

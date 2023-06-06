import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor() { }

  public product: Product = {
    id: 1, 
    title: 'Candelabro',
    price: 120,
    img: 'https://images.pexels.com/photos/937526/pexels-photo-937526.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600',
    description: ''
  }
}

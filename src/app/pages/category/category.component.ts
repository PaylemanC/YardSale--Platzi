import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  template: `<app-products-list [products]="products"></app-products-list>`,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryId: string | null | number = null;
  limit = 15;
  offset = 0;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if (this.categoryId !== null) {
          return this.productsService.getByCategory(this.categoryId, this.limit, this.offset);
        }
        return [];
      })
    ).subscribe(data => {
      this.products = data;
    })
  }
}

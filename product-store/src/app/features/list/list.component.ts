import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products: any[] = [];

  productsServer = inject(ProductsService);

  ngOnInit(){
    this.productsServer.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}

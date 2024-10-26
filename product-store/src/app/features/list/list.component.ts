import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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

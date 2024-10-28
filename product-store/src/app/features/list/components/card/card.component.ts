import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule} from '@angular/material/button'
import { Product } from '../../../../shared/interfaces/product.inteface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();
  tituloProduto = computed(() => this.product().title);

  @Output() edit = new EventEmitter();
}

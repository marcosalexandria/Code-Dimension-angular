import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.inteface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  productsService = inject(ProductsService);
  matSnackbar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productsService
      .postProduct(product)
      .subscribe(() => {

        //as configuracoes estao no app.config apos refatoracao para uso global
        this.matSnackbar.open('Porduto salvo com sucesso!', 'OK');

        this.router.navigateByUrl('/').catch(console.log)

      });
  }
}

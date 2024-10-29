import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.inteface';
import { FormComponent } from '../../shared/components/form/form.component';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  productsService = inject(ProductsService);
  matSnackbar = inject(MatSnackBar);
  router = inject(Router);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];


  onSubmit(produc: Product) {
    this.productsService
      .putProduct(this.product.id, produc)
      .subscribe(() => {

        //as configuracoes estao no app.config apos refatoracao para uso global
        this.matSnackbar.open('Porduto editado com sucesso!', 'OK');

        this.router.navigateByUrl('/').catch(console.log)

      });
  }

}

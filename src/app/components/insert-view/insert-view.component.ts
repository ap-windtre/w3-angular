import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-input',
  templateUrl: './insert-view.component.html',
  styleUrls: ['./insert-view.component.scss']
})
export class InsertViewComponent implements OnInit {

  public productForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(undefined, Validators.compose([ Validators.required, Validators.minLength(3) ]) ),
      price: new FormControl(1, Validators.compose([ Validators.required, Validators.max(10), Validators.min(3) ]) ),
      category: new FormControl('Pasta e Pane', Validators.required)
    });
  }

  onSave(): void {
    if (this.productForm.invalid) {
      alert('Il form non è completo. Tutti i campi sono obbligatori');
      return;
    }

    const product = this.productForm.value as ProductItem;

    this.productService.addProduct(product).subscribe( () => {
      alert('Prodotto Inserito');
      this.router.navigate(['product']);
    });

    // alert(JSON.stringify(this.productForm.value));
  }

}

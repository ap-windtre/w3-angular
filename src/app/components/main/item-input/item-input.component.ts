import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../model/product';
import { ProductService } from '../service/product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {

  public productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

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

    const product = {} as ProductItem;
    product.name = this.productForm.value.name;
    product.category = this.productForm.value.category;
    product.price = this.productForm.value.price;
    product.quantity = this.productForm.value.quantity;
    this.productService.addProduct(product).subscribe( () => {
      alert('Prodotto Inserito');
    });

    // alert(JSON.stringify(this.productForm.value));
  }

}

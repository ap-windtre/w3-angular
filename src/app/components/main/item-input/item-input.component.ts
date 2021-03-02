import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductItem } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  private generateFormGroup(): FormGroup {
     return this.fb.group({
      name: this.fb.control(undefined, Validators.required),
      price: this.fb.control(undefined, Validators.required),
      category: this.fb.control(undefined, Validators.required),
      quantity: this.fb.control(undefined, Validators.required)
    });
  }

  ngOnInit(): void {
    this.formGroup = this.generateFormGroup();
  }

  onSave(): void {
    if (this.formGroup.invalid) {
      alert('Il form non è completo. Tutti i campi sono obbligatori');
      return;
    }
    let product = {} as ProductItem;

    product.name = this.formGroup.value.name;
    product.category = this.formGroup.value.category;
    product.price = this.formGroup.value.price;
    product.quantity = this.formGroup.value.quantity;
    this.productService.addProduct(product).subscribe( () => {alert("Prodotto Inserito")});
  }

}

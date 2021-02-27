import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  private generateFormGroup(): FormGroup {
     return this.fb.group({
      name: this.fb.control(undefined, Validators.required),
      price: this.fb.control(undefined, Validators.required),
      category: this.fb.control(undefined, Validators.required)
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
    alert(JSON.stringify(this.formGroup.value));
  }

}

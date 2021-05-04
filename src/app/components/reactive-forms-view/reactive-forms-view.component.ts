import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-view',
  templateUrl: './reactive-forms-view.component.html',
  styleUrls: ['./reactive-forms-view.component.scss']
})
export class ReactiveFormsViewComponent implements OnInit {

  userForm: FormGroup;

  today = new Date();

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('Alessandro', Validators.required),
      lastName: new FormControl('Piana', Validators.required),
      email: new FormControl('aaa.aaa@windtre.it',
        Validators.compose([ Validators.required, Validators.email ])),
      privacyPolicy: new FormControl(true, Validators.requiredTrue),
      gender: new FormControl('Male', Validators.required),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        zipCode: new FormControl('', Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(99999),
          Validators.minLength(5),
          Validators.maxLength(5)
        ]))
      })
    });
  }

  checkFormState(): void {
    console.log(this.userForm);
  }

  saveForm(): void {

    alert(
      JSON.stringify(
        this.userForm.value
      )
    );
  }

  showJSON(obj): string {
    return JSON.stringify(obj);
  }

  transformText(text: string): string {
    return text.toUpperCase();
  }

}

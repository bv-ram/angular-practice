import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  dynamicForm

  constructor() {
    this.dynamicForm = new UntypedFormGroup({
      fields: new UntypedFormArray([]),
    });
  }


  get fields() {
    return this.dynamicForm.get('fields') as UntypedFormArray;
  }


  addField() {
    const newField = new UntypedFormGroup({
      label: new UntypedFormControl('', Validators.required),
      value: new UntypedFormControl('', Validators.required),
    });
    this.fields.push(newField);
  }


  removeField(index: number) {
    this.fields.removeAt(index);
  }


  onSubmit() {
    console.log('Form Data:', this.dynamicForm.value);
  }

 

}

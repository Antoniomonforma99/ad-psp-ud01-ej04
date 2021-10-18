import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export class User {
  constructor(
    public email: string,
    public password: string
  )
  {};

}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() { }

  model = new User ('', '');

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  saveForm() {
    alert(''+this.model.email + '' + this.model.password);
  }


}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthLoginRequest } from 'src/app/models/dto/auth.dto';
import { AuthService } from 'src/app/services/auth.service';

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

  loginDto = new AuthLoginRequest();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.login(this.loginDto)
  }


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

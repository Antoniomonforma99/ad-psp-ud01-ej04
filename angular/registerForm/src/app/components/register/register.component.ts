import { Component, OnInit } from '@angular/core';
import { AuthRegisterRequest } from 'src/app/models/dto/auth.dto';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDto = new AuthRegisterRequest();

  hide = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  doRegister(){
    this.authService.register(this.registerDto).subscribe(registerResult => {
      alert(`Te has logueado y tu email es ${registerResult.email}`)
    });
  }


}

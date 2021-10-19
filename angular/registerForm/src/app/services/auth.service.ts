import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthRegisterRequest } from '../models/dto/auth.dto';
import { AuthLoginRequest } from '../models/dto/auth.dto';
import { AuthLoginResponse, AuthRegisterResponse } from '../models/interfaces/auth.interface';

const authUrl = 'auth';


//Para indicar que lo que vamos a enviar es de tipo JSON (Método POST)
const DEFAULT_HEADERS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

const fullbaseUrl = `${environment.api_base_url}/${authUrl}`

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    //Para hacer peticiones http inyectamos la dependecia HttpClient, tiene que ser privada
    constructor(private http: HttpClient) { }
  
    //Método Login (POST)
    login(loginDto : AuthLoginRequest) {
        const register = 'register'

      //Url a la que se va a hacer la peticion
      let requestUrl = `${fullbaseUrl}/${register}`;
      return this.http.post<AuthLoginResponse>(requestUrl, loginDto, DEFAULT_HEADERS);
    }

    //Metodo Register (POST)
    register(registerDto : AuthRegisterRequest) {
        const signUp = 'signUp';
        let requestUrl = `${fullbaseUrl}/${signUp}`;
        return this.http.post<AuthRegisterResponse>(requestUrl, registerDto, DEFAULT_HEADERS);

    }
  
    forgot() {
  
    }
  }
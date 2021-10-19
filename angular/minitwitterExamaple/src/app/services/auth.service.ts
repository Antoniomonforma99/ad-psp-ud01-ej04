import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

//constante que indique la baseURL de la api
//Para no repetir esto en cada servicio llevamos las variables comunes a /environments
//const API_BASE_URL= 'https://www.minitwitter.com:3001/apiv1';

//resto de la Url
const authUrl = 'auth';

//concatenamos la Url total
const urlTotal = `${environment.api_base_url}+${authUrl}`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Para hacer peticiones http inyectamos la dependecia HttpClient, tiene que ser privada
  constructor(private http: HttpClient) { }

  //Método Login
  login() {
    //Url a la que se va a hacer la peticion
    let requestUrl = `${urlTotal}/login`;
  }

  forgot() {

  }
}

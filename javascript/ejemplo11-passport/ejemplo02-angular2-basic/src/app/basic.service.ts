import { Injectable } from '@angular/core';

//Importamos
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicService {

  constructor(private http: Http) { }

  getResultado(): Observable <string>{
    //Establecer cabeceras de seguridad
    let cabeceraDeSeguridad = new Headers(/*{'Content-Type':'application/json'}*/);
    let username = 'jonathan';
    let password = 'steven';
    cabeceraDeSeguridad.append('Authorization', 'Basic ' + username + ':' + password);
    let opcionesDeRequest = new RequestOptions({headers: cabeceraDeSeguridad});

    return this.http.get('http://127.0.0.1:8080/home', opcionesDeRequest)
      .map((response: Response) =>{
        return response;
      })
      .catch((error: any)=>{
        console.error('Error!', error);
        return Observable.throw('Error al procesar la peticion');
      })
  }

}

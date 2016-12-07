import { Injectable } from '@angular/core';

//Importamos el observable
import{ Observable } from 'rxjs/Observable';
//Y el cliente socket
import * as io from 'socket.io-client';
//Importamos nuestra clase message
import { Message } from './message';

@Injectable()
export class ChatService {

  //Definimos una url plana
  private url: string = 'http://localhost:3000'
  //Definimos el socket que abrira el cliente
  private socket;

  constructor() { }

  sendMessage(message: Message): void{
    console.log("Enviando mensaje " + message);
    this.socket.emit('mando-un-mensaje', message);
  }

  getMessages(){
    return new Observable(
      (observer)=>{
        //Conexion con el servidor
        this.socket = io(this.url);
        //Metodos de gestion de mensajes
        this.socket.on('connect', ()=>{
          console.log('Cliente conectado con id: ' + this.socket.id);
        });
        this.socket.on('mando-un-mensaje', (datos)=>{
          observer.next(datos);
        });
        //Una forma de unsubscribe
        return ()=>{
          this.socket.disconnect();
        }
      }
    );
  }

}

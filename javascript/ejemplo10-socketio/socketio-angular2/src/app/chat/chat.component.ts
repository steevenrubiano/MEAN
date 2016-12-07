import { Component, OnInit, /*Definimos on destroy*/OnDestroy } from '@angular/core';

//Importamos la clase mensajes
import { Message } from '../message';

//Importamos el servicio
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  //Proveemos el servicio
  providers: [ChatService]
})
export class ChatComponent implements OnInit, /*Delacramos el on destroy*/OnDestroy {

  //Definimos lista de mensajes
  private messages: Message[] = [];
  private message;
  private connection;

  constructor(private service: ChatService) { }

  //Creamos un envio de mensajes
  sendMessage(){
    console.log("Mensaje a enviar por conmponente " + this.message)
    this.service.sendMessage(this.message);
  }

  ngOnInit() {
    this.message = new Message("","");
    this.connection = this.service.getMessages().subscribe(
      (newMessage: Message)=>{
        console.log('New message received!');
        this.messages.push(newMessage);
      }
    );
  }

  //Creamos el on destroy
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}

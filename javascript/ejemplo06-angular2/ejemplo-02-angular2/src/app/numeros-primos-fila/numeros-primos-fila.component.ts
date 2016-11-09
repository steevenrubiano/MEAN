import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  inputs:['numero'],
  outputs:['eventoMostrar']
})
export class NumerosPrimosFilaComponent implements OnInit {

  private numero: number = 0;
  private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  private mostrarContenido: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  enviarNotificacion(): void{
    this.mostrarContenido = !this.mostrarContenido;
    console.log("Evento enviado!")
    this.eventoMostrar.emit(this.mostrarContenido);
  }
}

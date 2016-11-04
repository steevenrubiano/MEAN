import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01-ngfor-ngif',
  templateUrl: './ejemplo01-ngfor-ngif.component.html',
  styleUrls: ['./ejemplo01-ngfor-ngif.component.css']
})
export class Ejemplo01NgforNgifComponent implements OnInit {

  variableDeInstancia: string;
  tomaArray: number[] = [1,5,5,7,8,2,4,5,8];
  constructor() {
    this.variableDeInstancia = "Renderizado componente nfor ngif";
   }

  ngOnInit() {
  }

}

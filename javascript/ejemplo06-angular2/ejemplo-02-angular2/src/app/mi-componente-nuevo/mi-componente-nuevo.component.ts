import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente-nuevo',
  templateUrl: './mi-componente-nuevo.component.html',
  styleUrls: ['./mi-componente-nuevo.component.css']
  //styles:[`p:hover{background-color:blue}`] OTRA FORMA DE DEFINIR ESTILOS
})
export class MiComponenteNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("inicio mi componente");
  }

}

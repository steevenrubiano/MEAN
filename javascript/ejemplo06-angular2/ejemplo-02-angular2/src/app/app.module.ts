import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiComponenteNuevoComponent } from './mi-componente-nuevo/mi-componente-nuevo.component';
import { Ejemplo01NgforNgifComponent } from './ejemplo01-ngfor-ngif/ejemplo01-ngfor-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteNuevoComponent,
    Ejemplo01NgforNgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,MiComponenteNuevoComponent,Ejemplo01NgforNgifComponent]
})
export class AppModule { }

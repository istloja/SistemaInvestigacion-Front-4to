import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { PagPrincipalComponent } from './vistas/pag-principal/pag-principal.component';
import { ProyectosComponent } from './vistas/componentes/proyectos/proyectos.component';
import { ResponsablesComponent } from './vistas/componentes/responsables/responsables.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagPrincipalComponent,
    ProyectosComponent,
    ResponsablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

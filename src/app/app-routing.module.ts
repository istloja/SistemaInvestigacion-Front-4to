import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import {PagPrincipalComponent} from './vistas/pag-principal/pag-principal.component';
import {ResponsablesComponent} from './vistas/componentes/responsables/responsables.component';
import {ProyectosComponent} from './vistas/componentes/proyectos/proyectos.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"pagPrincipal",component:PagPrincipalComponent, 
      children:[
        {path:"responsables",component:ResponsablesComponent},
        {path:"proyectos",component:ProyectosComponent}

  ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { ListaComponent } from './vuelo/components/lista/lista.component';
// import { RolComponent } from './rol/conteiners/rol.component';
// import { AgregarComponent } from './rol/conteiners/agregar/agregar.component';
// import { EditarComponent } from './rol/conteiners/editar/editar.component';


const routes: Routes = [
  {
    path: 'listaVuelos',
    component: ListaComponent,
  }, 
  {
    path: '', 
    redirectTo: '/vuelos',
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

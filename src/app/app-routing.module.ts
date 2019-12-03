import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { ListaComponent } from './vuelo/components/lista/lista.component'; 
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'listaVuelos',
    component: ListaComponent,
  }, 
  {
    path: 'test',//la neta no se quise hacer with thisss
    component: AppComponent,
  }, 
  {
    path: '', 
    redirectTo: '/listaVuelos',
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

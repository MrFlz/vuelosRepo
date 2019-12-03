import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './vuelo/components/lista/lista.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';  
import { VueloService } from './vuelo/services/vuelo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent, 
    NotFoundComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    VueloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

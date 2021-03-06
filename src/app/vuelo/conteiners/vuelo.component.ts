import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VueloService } from '../services/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  //styleUrls: ['./rol.component.sass']
})
export class RolComponent implements OnInit {

  listaVuelos: Observable<any>;

  constructor(
    private vueloService: VueloService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listaVuelos = this.vueloService.getRoles();
  } 

  OnUpdate(id: any){
    this.router.navigate(['/vuelos/editar/'+id]);
  }

}

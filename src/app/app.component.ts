import { Component } from '@angular/core';
import { VueloService } from './vuelo/services/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularVuelo';

  constructor(
    private vueloService: VueloService,
    private router: Router
  ) { 

    this.vueloService.getRoles();
  }
  
}

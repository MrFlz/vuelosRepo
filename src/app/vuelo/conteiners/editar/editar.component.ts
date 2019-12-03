import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vuelo } from '../../dto/vuelo';
import { VueloService } from '../../services/vuelo.service';

@Component({
  selector: 'app-editar', //no se que se refiere esto
  templateUrl: './editar.component.html',
  //styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {

  vueloForm = new FormGroup({
    status: new FormControl('', Validators.required),
  });

  constructor(
    private vueloService: VueloService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
  }

  edit(){
    const idVuelo = this.activeRoute.snapshot.paramMap.get("id");
    const payload: Vuelo = {
      ...this.vueloForm.value,
    };

    this.vueloService.update(payload, idVuelo)
      .subscribe(respuesta => {
        console.log(respuesta);
        this.router.navigate(['/vuelos'])
      });
  }

}

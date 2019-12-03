import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  //styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  nombre: string = 'Saludos desde el interior de tu siniestra mente';

  @Input() lista: Observable<any>;
 
  @Output() update = new EventEmitter<any>();

  constructor(
  ){}
    
  ngOnInit(): void {
  } 

  modify(id: any){
    this.update.emit(id);
  }

}

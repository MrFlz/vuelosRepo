import { Component, OnInit } from '@angular/core';
import { VueloService } from './vuelo/services/vuelo.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vuelo } from './vuelo/dto/vuelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
})

export class AppComponent implements OnInit{
  title = 'angularVuelo';

  lista: Observable<any>;
  vueloExistente: Vuelo[];

  //public lista: any = null;   

  constructor(
    private vueloService: VueloService,
    private router: Router
  ) { }

  ngOnInit(){
    this.lista = this.vueloService.get();    
  }

  /*miron(){
    //console.log("ya washé uwu : "+algo);  
    this.vueloService.getRoles().subscribe();  
  }*/

  clasehoy(){
    this.vueloService.get()
      .subscribe(respuesta => (
        this.vueloExistente = respuesta
        //this.lista = this.vueloService.get();
      ));

      /*this.blogPostService.getBlogPost(this.postId)
        .subscribe(data => (
          this.existingBlogPost = data,
          this.form.controls[this.formTitle].setValue(data.title),
          this.form.controls[this.formBody].setValue(data.body)
        ));*/
  }
  
}

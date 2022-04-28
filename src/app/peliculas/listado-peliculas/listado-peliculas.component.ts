import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
 
  constructor() { }
  @Input()
  peliculas: []
  @Input()
  loading: boolean
  ngOnInit(): void {
   
  }

  Delete(id: number):  void{
    this.peliculas.splice(id, 1)
  }

}

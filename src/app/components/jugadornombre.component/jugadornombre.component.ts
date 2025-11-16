import { Component, OnInit } from '@angular/core';
import { SeviceFutbol } from '../../services/service.futbol';
import { Jugador } from '../../models/jugador';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-jugadornombre',
  standalone: false,
  templateUrl: './jugadornombre.component.html',
  styleUrl: './jugadornombre.component.css',
})
export class JugadornombreComponent implements OnInit{
  public jugadores!: Array<Jugador>;
  public nombre!: string;

  constructor(private _service: SeviceFutbol, private _activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      this.nombre = params["nombre"];
      if(this.nombre != null){
        this._service.getJugadorNombre(this.nombre).subscribe(response => {
          this.jugadores = response;
        })
      }
    })
  }
}

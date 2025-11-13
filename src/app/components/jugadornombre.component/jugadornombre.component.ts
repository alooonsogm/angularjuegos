import { Component, OnInit, Input } from '@angular/core';
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
  @Input() idEquipo!: number;

  constructor(private _service: SeviceFutbol, private _activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if(params["nombre"]){
        let nombre = params["nombre"];
        this._service.getJugadorNombre(nombre).subscribe(response => {
          this.jugadores = response;
        })
      } else {
        this._service.getJugadoresEquipo(this.idEquipo).subscribe(response => {
          this.jugadores = response;
        })
      }
    })
  }
}

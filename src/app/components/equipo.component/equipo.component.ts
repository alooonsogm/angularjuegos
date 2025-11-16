import { Component, OnInit } from '@angular/core';
import { SeviceFutbol } from '../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';
import { DatosEquipo } from '../../models/datosequipo';
import { Equipo } from '../../models/equipo';
import { Jugador } from '../../models/jugador';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-equipo',
  standalone: false,
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit{
  public equipoEntero!: DatosEquipo;
  public equipo!: Equipo;
  public jugadores!: Array<Jugador>;

  constructor(private _service: SeviceFutbol, private _activateRoute: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      let id = params["id"];

      this.equipo = new Equipo(99, "", "", 1, "", "", 2);
      this.jugadores = [new Jugador(200, "", "", "", "", "", 3)];
      this.equipoEntero = new DatosEquipo(this.equipo, this.jugadores);

      //forkJoin se encarga de subscribirse a los servicios para ejecutar la peticion, y cuando ambas
      //peticiones terminan, lo muestra por pantalla.
      forkJoin({
        equipo: this._service.buscarEquipo(id),
        jugadores: this._service.getJugadoresEquipo(id),
      }).subscribe({
        next: (results) => {
          this.equipoEntero.equipo = results.equipo;
          this.equipoEntero.jugadores = results.jugadores;
        }
      });
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { SeviceFutbol } from '../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-equipo',
  standalone: false,
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit{
  public equipo!: Equipo;

  constructor(private _service: SeviceFutbol, private _activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      let id = params["id"];
      this._service.buscarEquipo(id).subscribe(response => {
        this.equipo = response;
      })
    })
    
  }
}

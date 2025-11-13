import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { SeviceFutbol } from '../../services/service.futbol';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{
  public equipos!: Array<Equipo>;
  @ViewChild("cajaNombre") cajaNombre!: ElementRef;

  constructor(private _service: SeviceFutbol, private _router: Router){

  }

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    })
  }

  buscarJugadores(): void {
    let nombre = this.cajaNombre.nativeElement.value;
    this._router.navigate(["/jugadornombre/" + nombre]);
  }
}

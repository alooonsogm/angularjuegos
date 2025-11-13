import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Equipo } from "../models/equipo";
import { Jugador } from "../models/jugador";

@Injectable()
export class SeviceFutbol {
    constructor(private _http: HttpClient){

    }

    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/Equipos";
        let urlFutbol = environment.urlFutbol;
        return this._http.get<Array<Equipo>>(urlFutbol + request);
    }

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
        let request = "api/Jugadores/JugadoresEquipos/" + idEquipo;
        let urlFutbol = environment.urlFutbol;
        return this._http.get<Array<Jugador>>(urlFutbol + request);
    }

    buscarEquipo(idEquipo: number): Observable<Equipo> {
        let request = "api/Equipos/" + idEquipo;
        let urlFutbol = environment.urlFutbol;
        return this._http.get<Equipo>(urlFutbol + request);
    }

    getJugadorNombre(nombre: string): Observable <Array<Jugador>> {
        let request = "api/Jugadores/BuscarJugadores/" + nombre;
        let urlFutbol = environment.urlFutbol;
        return this._http.get<Array<Jugador>>(urlFutbol + request);
    }
}
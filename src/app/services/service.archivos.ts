import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { FileModel } from "../models/filemodel";

@Injectable()
export class SeviceArchivos {
    constructor(private _http: HttpClient){

    }

    subirArchivos(elArchivo: FileModel): Observable<any> {
        let archivoJson = JSON.stringify(elArchivo);

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");

        let urlArchivos = environment.urlArchivos;
        let request = "api/TestingFiles";

        return this._http.post(urlArchivos + request, archivoJson, {headers: header});
    }
}
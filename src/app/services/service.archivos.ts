import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class SeviceArchivos {
    constructor(private _http: HttpClient){

    }

    subirArchivos(filename: string, filecontent: string): Observable<any> {
        let body = {
            fileName: filename,
            fileContent: filecontent
        };

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");

        let urlArchivos = environment.urlArchivos;
        let request = "api/TestingFiles";

        return this._http.post(urlArchivos + request, body, {headers: header});
    }
}
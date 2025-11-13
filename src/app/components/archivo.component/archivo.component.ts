import { Component,ViewChild, ElementRef } from '@angular/core';
import { SeviceArchivos } from '../../services/service.archivos';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-archivo',
  standalone: false,
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css',
})
export class ArchivoComponent {
  @ViewChild("cajaArchivo") cajaArchivo!: ElementRef;

  constructor(private _service:SeviceArchivos){
    
  }

  subirArchivo(): void {
    var file = this.cajaArchivo.nativeElement.files[0];
    var nombreFichero = file.name;

    //lee contenidos de archivos del cliente (local) de forma asíncrona.
    const reader = new FileReader();
    //Se pone primero reader.onload para ya tener definido que hacer cuando termine la lectura,
    //si inicias antes la lectura que el reader.onload puede pasar que la lectura finalice sin que este aun definido reader.onload
    //Por lo que no se llegaria a hacer nunca lo que hay dentro del reader.onload
    reader.onload = () => {
      // `reader.result` es algo como: "data:image/png;base64,iVBORw0K..."
      const base64String = (reader.result as string).split(',')[1]; // quitamos el encabezado "data:image/png;base64,"

      let newFile = new FileModel(nombreFichero, base64String);

      this._service.subirArchivos(newFile).subscribe(() => {
        console.log("Archivo subido.");
      });
    }
    //Inicia la lectura del archivo
    reader.readAsDataURL(file);
  }
}

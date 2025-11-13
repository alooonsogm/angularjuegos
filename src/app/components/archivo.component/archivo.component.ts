import { Component,ViewChild, ElementRef } from '@angular/core';
import { SeviceArchivos } from '../../services/service.archivos';

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
    let archivo = this.cajaArchivo.nativeElement as HTMLInputElement;
    const file = archivo.files![0];

    const reader = new FileReader();
    reader.onload = () => {
      // `reader.result` es algo como: "data:image/png;base64,iVBORw0K..."
      const base64String = (reader.result as string).split(',')[1]; // quitamos el encabezado "data:...;base64,"

      this._service.subirArchivos(file.name, base64String).subscribe(() => {
        console.log("Archivo subido.");
        console.log(reader.result as string);
      });
    }
    reader.readAsDataURL(file);
  }
}

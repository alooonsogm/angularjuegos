import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { ArchivoComponent } from './components/archivo.component/archivo.component';
import { EquipoComponent } from './components/equipo.component/equipo.component';
import { JugadornombreComponent } from './components/jugadornombre.component/jugadornombre.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "archivos", component: ArchivoComponent },
  { path: "equipo/:id", component: EquipoComponent },
  { path: "jugadornombre/:nombre", component: JugadornombreComponent },
  { path: "jugadornombre", component: JugadornombreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

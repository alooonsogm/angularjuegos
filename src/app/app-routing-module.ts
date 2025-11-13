import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { ArchivoComponent } from './components/archivo.component/archivo.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "archivos", component: ArchivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

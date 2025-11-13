import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { ArchivoComponent } from './components/archivo.component/archivo.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SeviceArchivos } from './services/service.archivos';
import { SeviceFutbol } from './services/service.futbol';
import { EquipoComponent } from './components/equipo.component/equipo.component';
import { JugadornombreComponent } from './components/jugadornombre.component/jugadornombre.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    ArchivoComponent,
    EquipoComponent,
    JugadornombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    SeviceArchivos,
    SeviceFutbol,
  ],
  bootstrap: [App]
})
export class AppModule { }

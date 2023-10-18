import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './componets/registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './componets/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

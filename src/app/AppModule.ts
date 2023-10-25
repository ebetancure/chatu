import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";


import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';






@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
    PerfilComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

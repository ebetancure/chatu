import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './componets/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './componets/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  {path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

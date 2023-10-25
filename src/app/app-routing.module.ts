import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PaginaPComponent } from './components/pagina-p/pagina-p.component';
import { AuthGuard } from "./auth.guard";


const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'pagina-p', component: PaginaPComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

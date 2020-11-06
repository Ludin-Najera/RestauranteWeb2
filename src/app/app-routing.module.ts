import { ContentChildren, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TemasComponent } from './temas/temas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { Bebidas2Component } from './bebidas2/bebidas2.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'editar_bebidas', component: Bebidas2Component },
  { path: 'crear_bebidas', component: BebidasComponent },
  { path: 'editar_bebidas/:idbebidas', component: BebidasComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
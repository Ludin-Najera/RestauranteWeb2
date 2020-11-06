import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { BebidasService, InicioService, MenuService, UsuariosService } from './_services/inicio.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TemasComponent } from './temas/temas.component';
import { from } from 'rxjs';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { Bebidas2Component } from './bebidas2/bebidas2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardAdminComponent,
    TemasComponent,
    UsuariosComponent,
    BebidasComponent,
    Bebidas2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    authInterceptorProviders,
    InicioService,
    MenuService,
    UsuariosService,
    BebidasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { temas1 } from '../models/temas';
import { bebidas1 } from '../models/bebidas';



//ruta servidor
const AUTH_API = 'http://localhost:5000/';
//login


@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', user);
  }
}

//menu

@Injectable({
    providedIn: 'root'
  })
  export class MenuService {
    
    constructor(private http: HttpClient){}

    getadmin() {
        return this.http.get(AUTH_API + 'admin');
    };

    getuser() {
        return this.http.get(AUTH_API + 'user');
    };

  }

//temas

@Injectable({
    providedIn: 'root'
  })
  export class TemasService {
    
    constructor(private http: HttpClient){}

    editartemas(id: string | number, temas: temas1): Observable<temas1>{
      return this.http.put(AUTH_API + `temas/${id}`, temas);
    };

    gettemas() {
      return this.http.get(AUTH_API);
  };

  }

//usuarios

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  constructor(private http: HttpClient){}

  getusuarios() {
    return this.http.get(AUTH_API + 'usuarios');
  };

}


//bebidas

@Injectable({
  providedIn: 'root'
})
export class BebidasService {
  
  constructor(private http: HttpClient){}

  getbebidas() {
    return this.http.get(AUTH_API + 'bebidas');
  };

  getbebida(id: string){
    return this.http.get(AUTH_API + `bebidas/${id}`);
  };

  eliminarbebidas(id: string){
    return this.http.delete(AUTH_API + `bebidas/${id}`)
  };

  editarbebidas(id: string | number, bebidas: bebidas1): Observable<bebidas1>{
    return this.http.put(AUTH_API + `bebidas/${id}`, bebidas);
  };

  insertarbebidas(bebidas: bebidas1){
    return this.http.post(AUTH_API + 'bebidas', bebidas)
  };

}


















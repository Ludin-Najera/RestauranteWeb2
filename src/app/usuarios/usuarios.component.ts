import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { UsuariosService } from '../_services/inicio.service';
import { usuarios1 } from '../models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuarios: any = [];


  constructor(private usuariosservice: UsuariosService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.usuariosservice.getusuarios().subscribe(
      res => {
        this.usuarios = res;
      },
        
      err => console.error(err)
    );
  }

}

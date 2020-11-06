import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/inicio.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  menu: any = [];

  constructor(private menuservice: MenuService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.menuservice.getadmin().subscribe(
      res => {
        this.menu = res;
      },
        
      err => console.error(err)
    );
  }


}


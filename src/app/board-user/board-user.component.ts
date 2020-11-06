import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/inicio.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  menu: any = [];

  constructor(private menuservice: MenuService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.menuservice.getuser().subscribe(
      res => {
        this.menu = res;
      },
        
      err => console.error(err)
    );
  }


}

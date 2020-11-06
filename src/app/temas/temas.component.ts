import { Component, OnInit } from '@angular/core';
import { TemasService } from '../_services/inicio.service';
import { temas1 } from '../models/temas';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  temas: temas1 = {
    id: 1,
    url: ''
  };

  constructor(private temasservice: TemasService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  editar(){
    this.temasservice.editartemas(this.temas.id, this.temas).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/admin');
    },
      err => console.log(err)
    );
  }
  


}


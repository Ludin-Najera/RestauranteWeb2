import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { TemasService } from '../app/_services/inicio.service';
import { temas1 } from '../app/models/temas';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  temas: temas1 = {
    id: 1,
    url: ''
  };

  
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  title = 'dinamic-styles';
  cssUrl: string;
  
    


  constructor(public sanitizer: DomSanitizer, private tokenStorageService: TokenStorageService, public temasservice: TemasService, private router: Router, private activedroute: ActivatedRoute) { 

    
    this.cssUrl = `/assets/styles1.css`;

  }

  changeStyle() {
    this.cssUrl = (this.cssUrl === `/assets/styles1.css`) ? `/assets/styles2.css` : `/assets/styles1.css`;
  }




  ngOnInit(): void {

    this.actualizar();
    

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  actualizar(){
    this.temasservice.gettemas().subscribe(
      res => {
        this.temas = res;
        
      },
        
      err => console.error(err)
    );
  }


  


}


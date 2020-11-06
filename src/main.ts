import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { temas1 } from './app/models/temas';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { TemasService } from './app/_services/inicio.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  

  
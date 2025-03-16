import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "./loader/loader.component";
import { ApiService } from './api.service';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [LoaderComponent, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular8';

  constructor(public service: ApiService) {
    this.loaderInfo()
  }

  public isLoading:any;

  loaderInfo() {
    this.service.loader.subscribe( (data:any) => {
      this.isLoading = data
    } )
  }
}

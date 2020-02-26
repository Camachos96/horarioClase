import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private listaNivelesEstudios;


  constructor(public router: Router, private datos: DataServiceService) {

  }

  getEstudios() {
    this.datos.GetEstudios().then((data) => {
      this.listaNivelesEstudios = data;
    });
  }

  goGrupos(id: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        id
      }
    };
    this.router.navigate(['grupos'], navigationExtras);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.datos.getDataBaseState().subscribe(rdy => {
      if (rdy) {
        this.getEstudios();
      }
    });
  }
}

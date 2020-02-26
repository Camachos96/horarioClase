import { Component, OnInit } from '@angular/core';
import { DataServiceMocksService } from '../mocks/data-service-mocks.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})

export class GruposPage implements OnInit {
  estudioSeleccionado: string;
  grupos;

  constructor(private mock: DataServiceService, private router: Router) {
    this.estudioSeleccionado = this.router.getCurrentNavigation().extras.state.id;
    this.mock.getGrupos(this.estudioSeleccionado).then((grupos) => {
      this.grupos = grupos;
    }).catch(() => {
      return null;
    });
  }

  goHorario(idGrupo: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        idGrupo
      }
    };
    this.router.navigate(['horario-grid'], navigationExtras);
  }

  ngOnInit() {
  }

}

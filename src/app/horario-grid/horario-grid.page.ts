import { MateriaHora } from './../model/materia-hora';
import { Horario } from './../model/horario';
import { Component, OnInit } from '@angular/core';
import { DataServiceMocksService } from '../mocks/data-service-mocks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { ToastController } from '@ionic/angular';
import { MateriaHora } from '../model/materia-hora';
import { ModalController } from '@ionic/angular';
import { log } from 'util';

@Component({
  selector: 'app-horario-grid',
  templateUrl: './horario-grid.page.html',
  styleUrls: ['./horario-grid.page.scss'],
})
export class HorarioGridPage implements OnInit {
  grupoSeleccionado: number;
  horario: Horario = new Horario();
  loaded = false;
  horas: Array<number> = [0, 1, 2, 3, 4, 5];
  dias: Array<number> = [0, 1, 2, 3, 4];
  constructor(private mock: DataServiceService, private router: Router, private toast: ToastController) {}

  async openToast(asignaturas: Array<string>) {
    const mytoast = await this.toast.create({
      color: 'dark',
      duration: 2000,
      message: 'Toast Underdevelopment lol',
      showCloseButton: true
    });

    await mytoast.present();
  }

  ngOnInit() {
    this.grupoSeleccionado = this.router.getCurrentNavigation().extras.state.idGrupo;
    this.mock.getHorario(this.grupoSeleccionado).then((horarioFinal) => {
      this.horario = horarioFinal as Horario;
      console.log('Horario Final del constructor: ', this.horario.cuadrante);
      this.loaded = true;
    }).catch((error) => {
      prompt(error);
    });
  }



}

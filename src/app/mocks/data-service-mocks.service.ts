import { Injectable } from '@angular/core';
import { Horario } from '../model/horario';
import { MateriaHora } from '../model/materia-hora';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataServiceMocksService {

  cuadrantePrueba: string[][] = new Array();

  constructor() { }

  getEstudios() {
    const estudios: Array<string> = ['ESO', 'DIV', 'BAC', 'PCPI', 'GM', 'GS'];
    return new Promise((resolve, reject) => {
      resolve(estudios);
    });
  }

  // Consulta simulada buscando todos los grupos de Grado Superior (6)
  getGrupos(estudios: string) {
    const grupos: Array<string> = ['1af', '1inf', '2af', '2inf'];
    return new Promise((resolve, reject) => {
      resolve(grupos);
    });
  }

  getHorario(grupo: string) {
    const horario: Horario = new Horario();
    let uno: MateriaHora = new MateriaHora();
    uno.materias = ['Ade', 'Luc'];
    let dos: MateriaHora = new MateriaHora();
    dos.materias = ['Ade'];
    let tres: MateriaHora = new MateriaHora();
    tres.materias = ['Luc'];
    let cuatro: MateriaHora = new MateriaHora();
    cuatro.materias = ['Jos'];
    let cinco: MateriaHora = new MateriaHora();
    cinco.materias = ['Jos', 'Luc'];
    // tslint:disable-next-line:max-line-length
    horario.cuadrante = [[uno, tres, cinco, cinco, dos, dos ], [uno, tres, dos, tres, tres, cinco], [dos, tres, tres, tres, cuatro, dos], [dos, cuatro, uno, uno, tres, tres], [uno, cuatro, cinco, cinco, dos, tres]];
    return new Promise((resolve, reject) => {
      resolve(horario);
    });
  }

  // Pasamos por parámetro un array de materias desestructurado
  // Este metodo devolverá los nombres completos de los estudios. Pasamos las siglas
/*   getDescripcion(materias: MateriaHora): string[]{

  } */


}

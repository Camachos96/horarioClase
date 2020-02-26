import { Horario } from './../model/horario';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { MateriaHora } from '../model/materia-hora';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private plt: Platform, private sqlite: SQLite) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'Horario16.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.dbReady.next(true);
        });
    });

  }
  getDataBaseState() {
    return this.dbReady.asObservable();
  }

  GetEstudios() {
    const sql = 'SELECT * FROM estudios';
    return new Promise((resolve, reject) => {
      this.database.executeSql(sql, [])
        .then(
          (data) => {
            const arrayEstudios = [];
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                arrayEstudios.push({
                  idEstudios: data.rows.item(i).idEstudios,
                  nombre: data.rows.item(i).nombre,
                });
              }
              console.log(arrayEstudios);
              resolve(arrayEstudios);
            }})
        .catch ( (error) => {
                console.log('error al leer all users ', error);
                reject(error);
                   }
          );
  });
}

getGrupos(estudios: string) {
  const sql = 'Select grupo.nombre, grupo.idGrupo from grupo where grupo.idEstudios = ?';
  return new Promise((resolve, reject) => {
    this.database.executeSql(sql, [estudios])
    .then(
      (data) => {
        const arrayGrupos = [];
        if (data.rows.length > 0) {
          for (let index = 0; index < data.rows.length; index++) {
            arrayGrupos.push({
              idGrupo: data.rows.item(index).idGrupo,
              nombre: data.rows.item(index).nombre
            });
          }
          resolve(arrayGrupos);
    }}).catch((error) => reject(error));
  });
}

getHorario(grupo: number) {
  // tslint:disable-next-line:max-line-length
  const sql = 'SELECT materia.nombre, materiahoraclase.idHoraClase from materiahoraclase, materia WHERE materiahoraclase.idHoraClase IN (SELECT horaClase.idHoraClase from horaClase WHERE horaClase.idDiaClase IN (Select diaClase.idDiaClase from diaClase WHERE diaClase.idGrupo like (Select grupo.idGrupo FROM grupo WHERE grupo.idGrupo like ?))) AND materia.idMateria = materiahoraclase.idMateria';
  return new Promise((resolve, reject) => {
    this.database.executeSql(sql, [grupo])
    .then(
      (data) => {
        const arrayHoras = [];
        if (data.rows.length > 0) {
          for (let index = 0; index < data.rows.length; index++) {
            arrayHoras.push({
              nombre: data.rows.item(index).nombre,
              idHora: data.rows.item(index).idHoraClase
            });
          }
          // const horarioFinal: Horario = this.montarHorario(arrayHoras);
          resolve(this.montarHorario(arrayHoras));
        }}).catch((error) => reject(error));
  });
}

montarHorario(horario: Array<any>): Horario {
  const horarioFinal: Horario = new Horario();
  let arrayHoras: Array<string> = [];
  let idHoraUltimo = horario[0].idHora;
  let horarioPosition = -1;
  for (let dias = 0; dias < 5; dias++) {
    console.log(dias);
    for (let horas = 0; horas < 6; horas++) {
      let bandera = false;
      while (bandera === false && horarioPosition < (horario.length - 1)) {
        horarioPosition++;
        if (horario[horarioPosition].idHora === idHoraUltimo) {
          arrayHoras.push(horario[horarioPosition].nombre);
        } else {
          arrayHoras.forEach(element => {
            horarioFinal.cuadrante[dias][horas].materias.push(element);
          });
          arrayHoras = [];
          arrayHoras.push(horario[horarioPosition].nombre);
          bandera = true;
          if (horarioPosition === (horario.length - 1)) {
            arrayHoras.forEach(element => {
              horarioFinal.cuadrante[dias][horas + 1].materias.push(element);
            });
          }
        }
        idHoraUltimo = horario[horarioPosition].idHora;
      }
    }
  }
  return horarioFinal;
}

getMateria() {

}



}

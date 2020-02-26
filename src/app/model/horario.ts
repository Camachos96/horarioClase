import { MateriaHora } from './materia-hora';

export class Horario {
    cuadrante: MateriaHora[][];


    constructor() {
        this.cuadrante = [];
        for (let dias = 0; dias < 5; dias++) {
            this.cuadrante[dias] = [];
            for (let horas = 0; horas < 6; horas++) {
                this.cuadrante[dias][horas] = new MateriaHora();
            }
        }
    }

}

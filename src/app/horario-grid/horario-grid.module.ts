import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioGridPageRoutingModule } from './horario-grid-routing.module';

import { HorarioGridPage } from './horario-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioGridPageRoutingModule
  ],
  declarations: [HorarioGridPage]
})
export class HorarioGridPageModule {}

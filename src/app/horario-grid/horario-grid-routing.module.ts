import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioGridPage } from './horario-grid.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioGridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioGridPageRoutingModule {}

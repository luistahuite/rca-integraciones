import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChargesComponent } from './charges.component';

const routes: Routes = [
  {
    path: '',
    component: ChargesComponent,
    data: {
      title: 'Cargos',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargesRoutingModule {}


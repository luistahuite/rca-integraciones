import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreautorizacionComponent } from './Preautorizacion.component';

const routes: Routes = [
  {
    path: '',
    component: PreautorizacionComponent,
    data: {
      title: 'Pre Autorización',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreautorizacionRoutingModule {}


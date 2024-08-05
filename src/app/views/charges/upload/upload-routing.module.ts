import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    data: {
      title: 'Subir documentos',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {}


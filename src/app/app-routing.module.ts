import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'charges',
        loadChildren: () =>
          import('./views/charges/charge/charges.module').then((m) => m.ChargesModule)
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./views/charges/Invoice/invoice.module').then((m) => m.InvoiceModule)
      },
      {
        path: 'upload',
        loadChildren: () =>
          import('./views/charges/upload/upload.module').then((m) => m.UploadModule)
      }
      ,
      {
        path: 'preauthorization',
        loadChildren: () =>
          import('./views/Widget/Preauthorization/Preautorizacion.module').then((m) => m.PreautorizacionModule)
      }
      ,
      {
        path: 'dispensing',
        loadChildren: () =>
          import('./views/Widget/dispensacion/dispensacion.module').then((m) => m.DispensacionModule)
      }
      ,
      {
        path: 'settings',
        loadChildren: () =>
          import('./views/Settings/settings/settings.module').then((m) => m.SettingsModule)
      }
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

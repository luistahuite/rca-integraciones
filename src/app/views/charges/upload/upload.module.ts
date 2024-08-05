import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import{FilterByStatusPipe } from 'src/app/Pipes/FilterInvoicePipe'
import{FilterServicesPipe } from 'src/app/Pipes/FilterservicesPipe'
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  TooltipModule,ModalModule 
   
} from '@coreui/angular';

import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [UploadComponent,FilterByStatusPipe,FilterServicesPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UploadRoutingModule,
    CardModule,
    GridModule,
    DocsComponentsModule,
    AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,FormsModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  TooltipModule,IconModule,ModalModule 
  ],
  providers:[FilterServicesPipe,FilterByStatusPipe]
})
export class UploadModule {
}

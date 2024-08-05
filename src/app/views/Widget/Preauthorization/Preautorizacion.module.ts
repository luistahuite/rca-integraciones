import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
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

import { PreautorizacionComponent } from './Preautorizacion.component';
import { PreautorizacionRoutingModule } from './Preautorizacion-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [PreautorizacionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PreautorizacionRoutingModule,
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
  TooltipModule,IconModule,ModalModule,AutoCompleteModule
  ],
  providers:[]
})
export class PreautorizacionModule {
}

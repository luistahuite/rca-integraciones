import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
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

import { DispensacionComponent } from './dispensacion.component';
import { DispensacionRoutingModule } from './dispensacion-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [DispensacionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DispensacionRoutingModule,
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
  providers:[]
})
export class DispensacionModule {
}

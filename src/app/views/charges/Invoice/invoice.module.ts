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

import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvoiceRoutingModule,
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
  ]
})
export class InvoiceModule {
}

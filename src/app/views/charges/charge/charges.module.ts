import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
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
  TooltipModule 
} from '@coreui/angular';

import { ChargesComponent } from './charges.component';
import { ChargesRoutingModule } from './charges-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [ChargesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChargesRoutingModule,
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
  TooltipModule
  ]
})
export class ChargesModule {
}

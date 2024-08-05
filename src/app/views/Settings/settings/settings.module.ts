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

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
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
export class SettingsModule {
}

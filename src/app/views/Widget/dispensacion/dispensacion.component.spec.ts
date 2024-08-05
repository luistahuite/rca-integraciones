import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { DispensacionComponent } from './dispensacion.component';

describe('dispensing', () => {
  let component: DispensacionComponent;
  let fixture: ComponentFixture<DispensacionComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispensacionComponent],
      imports: [FormModule, CardModule, GridModule, ButtonModule, DocsComponentsModule, RouterTestingModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(DispensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDxComponent } from './modal-dx.component';

describe('ModalDxComponent', () => {
  let component: ModalDxComponent;
  let fixture: ComponentFixture<ModalDxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEditarUsuarioComponent } from './consultar-editar-usuario.component';

describe('ConsultarEditarUsuarioComponent', () => {
  let component: ConsultarEditarUsuarioComponent;
  let fixture: ComponentFixture<ConsultarEditarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarEditarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProdComponent } from './registro-prod.component';

describe('RegistroProdComponent', () => {
  let component: RegistroProdComponent;
  let fixture: ComponentFixture<RegistroProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

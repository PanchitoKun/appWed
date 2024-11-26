import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionPersonalComponent } from './produccion-personal.component';

describe('ProduccionPersonalComponent', () => {
  let component: ProduccionPersonalComponent;
  let fixture: ComponentFixture<ProduccionPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionTableComponent } from './produccion-table.component';

describe('ProduccionTableComponent', () => {
  let component: ProduccionTableComponent;
  let fixture: ComponentFixture<ProduccionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

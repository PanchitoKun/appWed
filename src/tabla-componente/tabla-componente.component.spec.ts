import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponenteComponent } from './tabla-componente.component';

describe('TablaComponenteComponent', () => {
  let component: TablaComponenteComponent;
  let fixture: ComponentFixture<TablaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

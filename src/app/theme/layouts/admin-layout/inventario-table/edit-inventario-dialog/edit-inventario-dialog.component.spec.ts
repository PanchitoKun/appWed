import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInventarioDialogComponent } from './edit-inventario-dialog.component';

describe('EditInventarioDialogComponent', () => {
  let component: EditInventarioDialogComponent;
  let fixture: ComponentFixture<EditInventarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInventarioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInventarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

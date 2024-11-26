import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventarioDialogComponent } from './add-inventario-dialog.component';

describe('AddInventarioDialogComponent', () => {
  let component: AddInventarioDialogComponent;
  let fixture: ComponentFixture<AddInventarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInventarioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInventarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoDialogComponent } from './add-producto-dialog.component';

describe('AddProductoDialogComponent', () => {
  let component: AddProductoDialogComponent;
  let fixture: ComponentFixture<AddProductoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

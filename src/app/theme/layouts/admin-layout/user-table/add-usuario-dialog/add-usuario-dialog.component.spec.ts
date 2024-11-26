import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsuarioDialogComponent } from './add-usuario-dialog.component';

describe('AddUsuarioDialogComponent', () => {
  let component: AddUsuarioDialogComponent;
  let fixture: ComponentFixture<AddUsuarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUsuarioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

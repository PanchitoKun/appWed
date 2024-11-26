import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-inventario-dialog',
  templateUrl: './add-inventario-dialog.component.html',
  styleUrls: ['./add-inventario-dialog.component.scss']
})
export class AddInventarioDialogComponent {
  inventarioForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddInventarioDialogComponent>,
    private fb: FormBuilder
  ) {
    this.inventarioForm = this.fb.group({
      id_producto: [0, Validators.required],
      cantidad_disponible: [0, [Validators.required, Validators.min(0)]],
      fecha_actualizacion: [new Date(), Validators.required]
    });
  }

  onSave(): void {
    if (this.inventarioForm.valid) {
      this.dialogRef.close(this.inventarioForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
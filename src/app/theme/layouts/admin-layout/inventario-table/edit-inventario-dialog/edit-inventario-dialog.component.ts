import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Inventario {
  id_inventario: number;
  id_producto: number;
  cantidad_disponible: number;
  fecha_actualizacion: Date;
}

@Component({
  selector: 'app-edit-inventario-dialog',
  templateUrl: './edit-inventario-dialog.component.html',
  styleUrls: ['./edit-inventario-dialog.component.scss']
})
export class EditInventarioDialogComponent {
  inventarioForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditInventarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inventario,
    private fb: FormBuilder
  ) {
    this.inventarioForm = this.fb.group({
      id_producto: [data.id_producto, Validators.required],
      cantidad_disponible: [data.cantidad_disponible, [Validators.required, Validators.min(0)]],
      fecha_actualizacion: [data.fecha_actualizacion, Validators.required]
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
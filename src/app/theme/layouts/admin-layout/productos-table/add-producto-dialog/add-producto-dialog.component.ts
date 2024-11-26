import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-producto-dialog',
  templateUrl: './add-producto-dialog.component.html',
  styleUrls: ['./add-producto-dialog.component.scss']
})
export class AddProductoDialogComponent {
  productoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddProductoDialogComponent>,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      nombre_producto: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      unidad_medida: ['', Validators.required]
    });
  }

  onSave(): void {
    if (this.productoForm.valid) {
      this.dialogRef.close(this.productoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
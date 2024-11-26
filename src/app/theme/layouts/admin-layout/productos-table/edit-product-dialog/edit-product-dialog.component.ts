import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Producto {
  id_producto: number;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  unidad_medida: string;
}

@Component({
  selector: 'app-edit-producto-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductoDialogComponent {
  productoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      nombre_producto: [data.nombre_producto, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      precio: [data.precio, [Validators.required, Validators.min(0)]],
      unidad_medida: [data.unidad_medida, Validators.required]
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
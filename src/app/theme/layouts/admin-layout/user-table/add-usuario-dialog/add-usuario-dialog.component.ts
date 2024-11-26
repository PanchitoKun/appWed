import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-usuario-dialog',
  templateUrl: './add-usuario-dialog.component.html',
  styleUrls: ['./add-usuario-dialog.component.scss']
})
export class AddUsuarioDialogComponent {
  usuarioForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUsuarioDialogComponent>,
    private fb: FormBuilder
  ) {
    this.usuarioForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fnac: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      id_cargo: [1, Validators.required], // Default to ADMINISTRADOR
      huella_digital: [null],
      contrato: ['Contrato indefinido', Validators.required], // Default to "Contrato indefinido"
      contraseña: ['', Validators.required]
    });
  }

  onSave(): void {
    if (this.usuarioForm.valid) {
      this.dialogRef.close(this.usuarioForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
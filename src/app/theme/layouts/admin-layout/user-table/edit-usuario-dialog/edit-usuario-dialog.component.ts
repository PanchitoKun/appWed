import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  rut: string;
  nombre: string;
  apellido: string;
  fnac: string;
  direccion: string;
  correo: string;
  id_cargo: number;
  huella_digital: any;
  contrato: string;
}

@Component({
  selector: 'app-edit-usuario-dialog',
  templateUrl: './edit-usuario-dialog.component.html',
  styleUrls: ['./edit-usuario-dialog.component.scss']
})
export class EditUsuarioDialogComponent {
  usuarioForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder
  ) {
    this.usuarioForm = this.fb.group({
      nombre: [data.nombre, Validators.required],
      apellido: [data.apellido, Validators.required],
      fnac: [data.fnac, Validators.required],
      direccion: [data.direccion, Validators.required],
      correo: [data.correo, [Validators.required, Validators.email]],
      id_cargo: [data.id_cargo, Validators.required],
      huella_digital: [data.huella_digital],
      contrato: [data.contrato, Validators.required],
      contraseña: ['']
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
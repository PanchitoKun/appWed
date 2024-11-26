import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user-dialog',
  templateUrl: './register-user-dialog.component.html',
  styleUrls: ['./register-user-dialog.component.scss']
})
export class RegisterUserDialogComponent {
  constructor(public dialogRef: MatDialogRef<RegisterUserDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRegisterClick(): void {
    // Handle registration logic here
    this.dialogRef.close();
  }
}
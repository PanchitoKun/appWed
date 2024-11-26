import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './user-service/user-service.component'; // Ensure the correct path
import { AddUsuarioDialogComponent } from './add-usuario-dialog/add-usuario-dialog.component';
import { EditUsuarioDialogComponent } from './edit-usuario-dialog/edit-usuario-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  navCollapsed: boolean = false;
  navCollapsedMob: boolean = false;
  users: User[] = [];
  dataSource = new MatTableDataSource<User>([]);
  displayedColumns: string[] = ['rut', 'nombre', 'apellido', 'correo', 'actions'];

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsuarios().subscribe((data: User[]) => {
      this.users = data;
      this.dataSource.data = data;
    });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(AddUsuarioDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUsuario(result).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(EditUsuarioDialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUsuario(user.rut, result).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  deleteUser(rut: string): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.userService.deleteUsuario(rut).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  navMobClick() {
    this.navCollapsedMob = !this.navCollapsedMob;
  }
}
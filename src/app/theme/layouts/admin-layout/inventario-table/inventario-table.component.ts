import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InventarioService } from './service/inventario.service';
import { AddInventarioDialogComponent } from './add-inventario-dialog/add-inventario-dialog.component';
import { EditInventarioDialogComponent } from './edit-inventario-dialog/edit-inventario-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { Inventario } from './service/inventario.model'; // Import the Inventario interface

@Component({
  selector: 'app-inventario-table',
  templateUrl: './inventario-table.component.html',
  styleUrls: ['./inventario-table.component.scss']
})
export class InventarioTableComponent implements OnInit {
  inventarios: Inventario[] = [];
  dataSource = new MatTableDataSource<Inventario>([]);
  displayedColumns: string[] = ['id_inventario', 'id_producto', 'nombre_producto', 'cantidad_disponible', 'fecha_actualizacion', 'actions'];
  
  navCollapsed: boolean = false; // Inicialización
  navCollapsedMob: boolean = false; // Inicialización

  constructor(
    private router: Router,
    private inventarioService: InventarioService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadInventarios();
  }

  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('mob-open');
    }
  }

  loadInventarios(): void {
    this.inventarioService.getInventarios().subscribe((data: Inventario[]) => {
      this.inventarios = data;
      this.dataSource.data = data;
    });
  }

  deleteInventario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este inventario?')) {
      this.inventarioService.deleteInventario(id).subscribe(() => {
        this.loadInventarios();
      });
    }
  }

  editInventario(inventario: Inventario): void {
    const dialogRef = this.dialog.open(EditInventarioDialogComponent, {
      width: '400px',
      data: inventario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventarioService.updateInventario(inventario.id_inventario, result).subscribe(() => {
          this.loadInventarios();
        });
      }
    });
  }

  addInventario(): void {
    const dialogRef = this.dialog.open(AddInventarioDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventarioService.addInventario(result).subscribe(() => {
          this.loadInventarios();
        });
      }
    });
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
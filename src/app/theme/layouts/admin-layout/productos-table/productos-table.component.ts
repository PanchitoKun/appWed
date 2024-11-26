import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from './services/producto.service';
import { EditProductoDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddProductoDialogComponent } from './add-producto-dialog/add-producto-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
interface Producto {
  id_producto: number;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  unidad_medida: string;
}

@Component({
  selector: 'productos-table',
  templateUrl: './productos-table.component.html',
  styleUrls: ['./productos-table.component.scss']
})
export class ProductosTableComponent implements OnInit {
  productos: Producto[] = [];

  dataSource = new MatTableDataSource<any>([]); // Replace `any` with your data type
  displayedColumns: string[] = ['id_producto', 'nombre_producto', 'descripcion', 'precio', 'unidad_medida', 'actions'];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    public dialog: MatDialog
  ) {}

  navCollapsed: boolean = false; // Inicialización
  navCollapsedMob: boolean = false; // Inicialización

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

  ngOnInit(): void {
    this.loadProductos();
  }

  addProducto(): void {
    const dialogRef = this.dialog.open(AddProductoDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoService.addProducto(result).subscribe(() => {
          this.loadProductos();
        });
      }
    });
  }



  loadProductos(): void {
    this.productoService.getProductos().subscribe((data: Producto[]) => {
      console.log('Productos loaded:', data); // Add this line to log the loaded products
      this.productos = data;
      this.dataSource.data = data; // Ensure dataSource is set
    });
  }

  deleteProducto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.deleteProducto(id).subscribe(() => {
        this.loadProductos();
      });
    }
  }

  editProducto(producto: Producto): void {
    const dialogRef = this.dialog.open(EditProductoDialogComponent, {
      width: '400px',
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoService.updateProducto(producto.id_producto, result).subscribe(() => {
          this.loadProductos();
        });
      }
    });
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
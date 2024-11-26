import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registro-inv',
  templateUrl: './registro-inv.component.html',
  styleUrls: ['./registro-inv.component.scss']
})
export class RegistroInvComponent {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      idProducto: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      cantidadDisponible: [0, [Validators.required, Validators.min(1)]],
      fechaActualizacion: ['', Validators.required]
    });
  }

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
  onSubmit(): void {
    if (this.productoForm.valid) {
      const nuevoProducto = this.productoForm.value;
      console.log('Producto registrado:', nuevoProducto);
      alert('Producto registrado con éxito');
      this.productoForm.reset();
    } else {
      this.productoForm.markAllAsTouched(); // Muestra los errores si el formulario no es válido
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  goBack(path: string): void {
    this.router.navigate([path]);
  }
}

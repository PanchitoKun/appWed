import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-table/user-service/user-service.component'; // Ensure the correct path
import { AuthService } from 'src/auth.service'; // Ensure the correct path

@Component({
  selector: 'app-consultar-editar-usuario',
  templateUrl: './consultar-editar-usuario.component.html',
  styleUrls: ['./consultar-editar-usuario.component.scss']
})
export class ConsultarEditarUsuarioComponent implements OnInit {
  userForm: FormGroup;
  originalValues: any = {};
  currentUserRut: string | null = null;

  navCollapsed: boolean = false; // Inicialización
  navCollapsedMob: boolean = false; // Inicialización

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentUserRut = this.authService.getRutFromToken();
    if (this.currentUserRut) {
      this.loadUserData();
    } else {
      console.error('No user RUT found in token');
    }
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

  loadUserData(): void {
    if (this.currentUserRut) {
      this.userService.getUserByRut(this.currentUserRut).subscribe(user => {
        this.originalValues = { ...user, password: '' }; // Do not pre-fill the password field
        this.userForm.patchValue({
          nombre: user.nombre,
          correo: user.correo,
          password: ''
        });
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.currentUserRut) {
        const updatedUser = {
          ...this.originalValues,
          ...this.userForm.value
        };
        this.userService.updateUsuario(this.currentUserRut, updatedUser).subscribe(() => {
          alert('Datos actualizados correctamente');
          this.router.navigate(['/admin/dashboard/default']);
        });
      }
    }
  }

  goBack(path: string): void {
    this.router.navigate([path]);
  }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

import { RegisterComponent } from './theme/layouts/admin-layout/register/register.component';
import { UserTableComponent } from './theme/layouts/admin-layout/user-table/user-table.component';
import { HomeComponent } from './demo/home/home.component';
import { ProductosTableComponent } from './theme/layouts/admin-layout/productos-table/productos-table.component';
import { InventarioTableComponent } from './theme/layouts/admin-layout/inventario-table/inventario-table.component';
import { RegistroInvComponent } from './theme/layouts/admin-layout/registro-inv/registro-inv.component';
import { RegistroProdComponent } from './theme/layouts/admin-layout/registro-prod/registro-prod.component';
import { ConsultarEditarUsuarioComponent } from './theme/layouts/admin-layout/consultar-editar-usuario/consultar-editar-usuario.component';
import { ProduccionPersonalComponent } from './theme/layouts/admin-layout/produccion-personal/produccion-personal.component';
import { ProduccionTableComponent } from './theme/layouts/admin-layout/produccion-table/produccion-table.component';

import { AuthGuard } from '../auth.guard'; // Importa el guard

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, // Protege la ruta admin
  { path: 'user-table', component: UserTableComponent, canActivate: [AuthGuard] }, // Protege la ruta user-table
  { path: 'productos-table', component: ProductosTableComponent, canActivate: [AuthGuard] }, // Protege la ruta productos-table
  { path: 'inventario-table', component: InventarioTableComponent, canActivate: [AuthGuard] }, // Protege la ruta inventario-table
  { path: 'registro-inv', component: RegistroInvComponent, canActivate: [AuthGuard] }, // Protege la ruta registro-inv
  { path: 'registro-prod', component: RegistroProdComponent, canActivate: [AuthGuard] }, // Protege la ruta registro-prod
  { path: 'login', loadComponent: () => import('./demo/authentication/login/login.component').then(m => m.LoginComponent) },
  { path: 'consultar-editar-usuario', component: ConsultarEditarUsuarioComponent, canActivate: [AuthGuard] }, // Protege la ruta consultar-editar-usuario
  { path: 'produccion-personal', component: ProduccionPersonalComponent, canActivate: [AuthGuard] }, // Protege la ruta produccion-personal
  { path: 'produccion', component: ProduccionTableComponent, canActivate: [AuthGuard] }, // Protege la ruta produccion
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // Protege la ruta admin y sus hijos
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent),
        canActivate: [AuthGuard] // Protege la ruta dashboard/default
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component'),
        canActivate: [AuthGuard] // Protege la ruta typography
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component'),
        canActivate: [AuthGuard] // Protege la ruta color
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component'),
        canActivate: [AuthGuard] // Protege la ruta sample-page
      }
    ]
  },
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component').then(m => m.LoginComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatOptionModule } from '@angular/material/core'; // Import MatOptionModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { RegisterComponent } from './theme/layouts/admin-layout/register/register.component';
import { RegistroInvComponent } from './theme/layouts/admin-layout/registro-inv/registro-inv.component';
import { RegistroProdComponent } from './theme/layouts/admin-layout/registro-prod/registro-prod.component';
import { UserTableComponent } from './theme/layouts/admin-layout/user-table/user-table.component';
import { InventarioTableComponent } from './theme/layouts/admin-layout/inventario-table/inventario-table.component';
import { ConsultarEditarUsuarioComponent } from './theme/layouts/admin-layout/consultar-editar-usuario/consultar-editar-usuario.component';
import { ProduccionPersonalComponent } from './theme/layouts/admin-layout/produccion-personal/produccion-personal.component';
import { AuthService } from '../auth.service'; // Ensure the correct path
import { ProductosTableComponent } from './theme/layouts/admin-layout/productos-table/productos-table.component';
import { EditProductoDialogComponent } from './theme/layouts/admin-layout/productos-table/edit-product-dialog/edit-product-dialog.component';
import { AddProductoDialogComponent } from './theme/layouts/admin-layout/productos-table/add-producto-dialog/add-producto-dialog.component';

// standalone components
import { NavBarComponent } from './theme/layouts/admin-layout/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layouts/admin-layout/navigation/navigation.component';

import { UserService } from './theme/layouts/admin-layout/user-table/user-service/user-service.component'; // Ensure the correct path
import { AddUsuarioDialogComponent } from './theme/layouts/admin-layout/user-table/add-usuario-dialog/add-usuario-dialog.component';
import { EditUsuarioDialogComponent } from './theme/layouts/admin-layout/user-table/edit-usuario-dialog/edit-usuario-dialog.component';

import { InventarioService } from './theme/layouts/admin-layout/inventario-table/service/inventario.service'; // Ensure the correct path
import { AddInventarioDialogComponent } from './theme/layouts/admin-layout/inventario-table/add-inventario-dialog/add-inventario-dialog.component';
import { EditInventarioDialogComponent } from './theme/layouts/admin-layout/inventario-table/edit-inventario-dialog/edit-inventario-dialog.component';
import { ProduccionPersonalService } from './theme/layouts/admin-layout/produccion-personal/service/produccion-personal.service'; // Ensure the correct path
import { ProduccionTableComponent } from './theme/layouts/admin-layout/produccion-table/produccion-table.component';
import { ProduccionService } from './theme/layouts/admin-layout/produccion-table/service/produccion.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegistroInvComponent,
    RegistroProdComponent,
    UserTableComponent,
    InventarioTableComponent,
    ConsultarEditarUsuarioComponent,
    ProduccionPersonalComponent,
    ProductosTableComponent,
    EditProductoDialogComponent,
    AddProductoDialogComponent,
    AddUsuarioDialogComponent,
    EditUsuarioDialogComponent,
    AddInventarioDialogComponent,
    EditInventarioDialogComponent,
    ProduccionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule, // Add MatFormFieldModule
    MatInputModule, // Add MatInputModule
    SharedModule,
    NavBarComponent,
    NavigationComponent,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    
  ],
  providers: [AuthService, UserService,
  InventarioService, ProduccionPersonalService, ProduccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
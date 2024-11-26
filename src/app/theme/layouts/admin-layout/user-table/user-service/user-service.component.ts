import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  getUserByRut(rut: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${rut}`);
  }

  updateUsuarioid(id: number, user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  addUsuario(usuario: User): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  updateUsuario(rut: string, usuario: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${rut}`, usuario);
  }
  

  deleteUsuario(rut: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${rut}`);
  }
}
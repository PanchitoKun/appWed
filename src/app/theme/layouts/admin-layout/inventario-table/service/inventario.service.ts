import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from './inventario.model'; // Import the Inventario interface

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost:3000/api/inventarios';

  constructor(private http: HttpClient) {}

  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.apiUrl);
  }

  addInventario(inventario: Inventario): Observable<any> {
    return this.http.post(this.apiUrl, inventario);
  }

  updateInventario(id: number, inventario: Inventario): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, inventario);
  }

  deleteInventario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
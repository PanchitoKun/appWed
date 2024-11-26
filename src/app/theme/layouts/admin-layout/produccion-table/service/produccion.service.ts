// File: src/app/services/produccion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produccion {
  id_produccion: number;
  rut: string;
  fecha_hora: string;
  id_producto: number;
  kilogramos_producidos: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {
  private apiUrl = 'http://localhost:3000/api/produccion'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getProduccion(): Observable<Produccion[]> {
    return this.http.get<Produccion[]>(this.apiUrl);
  }
}
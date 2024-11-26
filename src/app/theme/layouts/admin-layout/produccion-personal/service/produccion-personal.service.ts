import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ProduccionPersonal {
  id_produccion: number;
  rut: string;
  fecha_hora: Date;
  id_producto: number;
  kilogramos_producidos: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProduccionPersonalService {
  private apiUrl = 'http://localhost:3000/api/produccion';

  constructor(private http: HttpClient) {}

  getProduccionPersonal(rut: string): Observable<ProduccionPersonal[]> {
    return this.http.get<ProduccionPersonal[]>(`${this.apiUrl}/${rut}`);
  }
}
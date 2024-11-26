import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private userRole: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(correo: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          const decoded: any = jwtDecode(response.token);
          this.userRole = decoded.id_cargo;
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRutFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.rut;
    }
    return null;
  }

  getUserRole(): number | null {
    return this.userRole;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userRole = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.post<any>(`${this.apiUrl}/validate-token`, { token }).pipe(
        tap(response => {
          if (response.message === 'Invalid token') {
            this.logout();
          } else {
            this.userRole = response.id_cargo;
          }
        })
      ).toPromise().then(response => response.message === 'Token is valid');
    }
    return Promise.resolve(false);
  }
}
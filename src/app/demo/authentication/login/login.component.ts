import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth.service'; // Ensure the correct path
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.correo, this.password).subscribe(
      response => {
        console.log('Login response:', response); // Debugging line
        if (response.token) {
          this.router.navigate(['/dashboard/default']);
          console.log('Navigation to dashboard'); // Debugging line
        }
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
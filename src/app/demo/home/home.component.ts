import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToDashboard() {
    this.router.navigate(['/login']);
  }
  redirectToUser() {
    this.router.navigate(['/app-default-user']);
  }
}
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AuthService } from '../services/auth.service';

/*import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; */

import { RESOLVE_ENV } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule,
    RouterLink,
    InputGroup,
    InputGroupAddonModule
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  msg: string = '';
  errorMessage: string = '';


  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  onClick() {
    this.msg = 'Welcome ';
  }

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/worksites']);
      this.errorMessage = 'Invalid credentials';
    }
  }
}

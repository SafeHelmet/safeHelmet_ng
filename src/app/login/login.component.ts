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
/*import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
/*import { environment } from 'src/environments/environment'; */

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


  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  onClick() {
    this.msg = 'Welcome ';
  }

  onLogin() {
    this.loading = true;
    
    const credentials = {
      username: this.username,
      password: this.password
    };

    console.log(credentials);

    this.router.navigate(['/dashboard']);

    // Use POST method to send credentials
    /*this.http.post(`${environment.apiUrl}/auth/login`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe({
      next: (response: any) => {
        // Handle successful login
        // For example, store the token in localStorage
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        // Handle login error
        console.error('Login failed:', error);
      },
      complete: () => {
        this.loading = false;
      }
    }); */
  }
}

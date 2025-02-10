import { Component, ViewEncapsulation } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Menubar,
    Avatar,
    Badge,
    Menu,
    RouterLink,
    RouterOutlet,
    Button
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {


  constructor(private router: Router, private authService: AuthService) { }
  topItems = [
    {
      
    }
  ];

  leftItems = [
    {
      label: 'Worksites',
      icon: 'pi pi-building',
      routerLink: ['/worksites'],
      style: { color: 'black' }
    },
    {
      label: 'Workers',
      icon: 'pi pi-prime',
      routerLink: ['/workers'],
      style: { color: 'black' }
    },
    {
      label: 'Helmets',
      icon: 'pi pi-exclamation-triangle',
      routerLink: ['/helmets'],
      style: { color: 'black' }
    },
    {
      label: 'Reports',
      icon: 'pi pi-file-pdf',
      routerLink: ['/readings'],
      style: { color: 'black' }
    },
    {
      label: 'Anomalies',
      icon: 'pi pi-bell',
      routerLink: ['/anomalies'],
      style: { color: 'black' }
    }
  ];

  logout() {
    console.log('Logout');
    this.authService.logout();
  }

  

  


}

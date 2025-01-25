import { Component, ViewEncapsulation } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { TestServiceService } from '../services/test-service.service';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

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


  constructor(private testService: TestServiceService, private router: Router) { }
  topItems = [
    {
      
    }
  ];

  leftItems = [
    {
      label: 'Worksites',
      icon: 'pi pi-building',
      routerLink: ['/worksites'],
      style: { color: 'black' },
      command: () => this.test()
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
  }

  test() {
    this.testService.getTest().subscribe({
      next: (data) => console.log('Response:', data),
      error: (err) => console.error('Error:', err)
    });
  }

  back() {
    this.router.navigate(['/dashboard']);
  }


}

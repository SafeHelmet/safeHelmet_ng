import { Component, ViewEncapsulation } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Menubar, Avatar, Badge, Menu],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  topItems = [
    {
      
    }
  ];

  leftItems = [
    {
      label: 'Constructions',
      icon: 'pi pi-exclamation-triangle',
      routerLink: ['/'],
      style: { color: 'black' }
    },
    {
      label: 'Reports',
      icon: 'pi pi-file-pdf',
      routerLink: ['/profile'],
      style: { color: 'black' }
    }
  ];

  logout() {
    console.log('Logout');
  }

}

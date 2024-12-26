import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorksitesComponent } from './worksites/worksites.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'worksites', component: WorksitesComponent },
    ]
  },

  // Catch-all
  { path: '**', redirectTo: '' }
];

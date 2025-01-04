import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorksitesComponent } from './worksites/worksites.component';
import { ReportsComponent } from './reports/reports.component';
import { WorksiteDetailComponent } from './worksite-detail/worksite-detail.component';
import { WorksiteNewComponent } from './worksite-new/worksite-new.component';
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
      { path: 'worksites/:id', component: WorksiteDetailComponent },
      { path: 'worksite/new', component: WorksiteNewComponent },
      { path: 'reports', component: ReportsComponent },
    ]
  },

  // Catch-all
  { path: '**', redirectTo: '' }
];

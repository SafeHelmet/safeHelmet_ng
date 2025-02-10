import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorksitesComponent } from './worksites/worksites.component';
import { ReportsComponent } from './reports/reports.component';
import { WorksiteDetailComponent } from './worksite-detail/worksite-detail.component';
import { WorksiteNewComponent } from './worksite-new/worksite-new.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { HelmetsComponent } from './helmets/helmets.component';
import { HelmetNewComponent } from './helmet-new/helmet-new.component';
import { WorkerNewComponent } from './worker-new/worker-new.component';
import { AnomaliesComponent } from './anomalies/anomalies.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountNewComponent } from './account-new/account-new.component';
import { WorksiteEditComponent } from './worksite-edit/worksite-edit.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { authGuard } from './auth.guard'; // Import your guard

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
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard] // Protect the dashboard route
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'worksites', component: WorksitesComponent, canActivate: [authGuard] },
      { path: 'worksites/:id', component: WorksiteDetailComponent, canActivate: [authGuard] },
      { path: 'worksite/new', component: WorksiteNewComponent, canActivate: [authGuard] },
      { path: 'worksite/:id/edit', component: WorksiteEditComponent, canActivate: [authGuard] },
      { path: 'readings', component: ReportsComponent, canActivate: [authGuard] },
      { path: 'readings/:id', component: ReportDetailComponent, canActivate: [authGuard] },
      { path: 'helmets', component: HelmetsComponent, canActivate: [authGuard] },
      { path: 'helmet/new', component: HelmetNewComponent, canActivate: [authGuard] },
      { path: 'workers', component: WorkersComponent, canActivate: [authGuard] },
      { path: 'worker/new', component: WorkerNewComponent, canActivate: [authGuard] },
      { path: 'worker/:id', component: WorkerDetailComponent, canActivate: [authGuard] },
      { path: 'worker/:id/edit', component: WorkerEditComponent, canActivate: [authGuard] },
      { path: 'anomalies', component: AnomaliesComponent, canActivate: [authGuard] },
      { path: 'accounts', component: AccountsComponent, canActivate: [authGuard] },
      { path: 'accounts/new', component: AccountNewComponent, canActivate: [authGuard] }
    ]
  },
  { path: '**', redirectTo: '' }
];

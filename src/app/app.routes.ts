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
      { path: 'worksite/:id/edit', component: WorksiteEditComponent },
      { path: 'readings', component: ReportsComponent },
      { path: 'readings/:id', component: ReportDetailComponent },
      { path: 'helmets', component: HelmetsComponent },
      { path: 'helmet/new', component: HelmetNewComponent },
      { path: 'worker/new', component: WorkerNewComponent },
      { path: 'anomalies', component: AnomaliesComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'accounts/new', component: AccountNewComponent }
    ]
  },

  // Catch-all
  { path: '**', redirectTo: '' }
];

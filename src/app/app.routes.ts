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
import { HelmetEditComponent } from './helmet-edit/helmet-edit.component';
import { HelmetDetailComponent } from './helmet-detail/helmet-detail.component';
import { AttendancesComponent } from './attendances/attendances.component';
import { AttendanceNewComponent } from './attendance-new/attendance-new.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { BossesComponent } from './bosses/bosses.component';
import { AttendancesQuickaddComponent } from './attendances-quickadd/attendances-quickadd.component';
import { BossDetailComponent } from './boss-detail/boss-detail.component';
import { BossEditComponent } from './boss-edit/boss-edit.component';
import { BossNewComponent } from './boss-new/boss-new.component';

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
    path: 'boss-selection',
    loadComponent: () => import('./boss-selection/boss-selection.component').then(m => m.BossSelectionComponent),
    canActivate: [authGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard] 
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
      { path: 'helmet/:id', component: HelmetDetailComponent, canActivate: [authGuard] },
      { path: 'helmet/:id/edit', component: HelmetEditComponent, canActivate: [authGuard] },
      { path: 'workers', component: WorkersComponent, canActivate: [authGuard] },
      { path: 'worksite/:id/assign', component: WorkerNewComponent, canActivate: [authGuard] },
      { path: 'worker/:id', component: WorkerDetailComponent, canActivate: [authGuard] },
      { path: 'worker/:id/edit', component: WorkerEditComponent, canActivate: [authGuard] },
      { path: 'anomalies', component: AnomaliesComponent, canActivate: [authGuard] },
      { path: 'attendances', component: AttendancesComponent, canActivate: [authGuard] },
      { path: 'attendance/:id', component: AttendanceDetailComponent, canActivate: [authGuard] },
      { path: 'attendances/new', component: AttendanceNewComponent, canActivate: [authGuard] },
      { path: 'attendances/quickadd/add', component: AttendancesQuickaddComponent, canActivate: [authGuard] },
      { path: 'accounts', component: AccountsComponent, canActivate: [authGuard] },
      { path: 'accounts/new', component: AccountNewComponent, canActivate: [authGuard] },
      { path: 'bosses', component: BossesComponent, canActivate: [authGuard] },
      { path: 'boss/:id', component: BossDetailComponent, canActivate: [authGuard] },
      { path: 'boss/:id/edit', component: BossEditComponent, canActivate: [authGuard] },
      { path: 'bosses/new', component: BossNewComponent, canActivate: [authGuard] }
    ]
  },
  { path: '**', redirectTo: '' }
];

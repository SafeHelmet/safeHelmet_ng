import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WorksiteService } from '../services/worksite.service';
import { Worker } from '../models/worker';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { Worksite } from '../models/worksite';
import { WorkerAttendance } from '../models/worker_attendance';
import { AttendanceService } from '../services/attendance.service';
import { Reading } from '../models/reading';

@Component({
  selector: 'app-worker-detail',
  standalone: true,
  imports: [CommonModule,
            ButtonModule,
            TabsModule,
            TableModule,
            RouterLink
            ],
  templateUrl: './worker-detail.component.html',
  styleUrl: './worker-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkerDetailComponent {

  workerId: string | null = null;
  worker: Worker | null = null;
  worksiteName: string | null = null;
  worksites: Worksite[] = [];
  attendances: WorkerAttendance[] = [];
  readings: Reading[] = [];

  constructor(
    private route: ActivatedRoute, 
    private workisteService: WorksiteService, 
    private router: Router,
    private attendanceService: AttendanceService,
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.workerId = id;
        this.workisteService.getWorkerById(id).subscribe(worker => {
          this.worker = worker;
          this.workisteService.getWorkerWorksite(id).subscribe( worksites => {
            this.worksites = worksites.worksites;
          });
          this.workisteService.getWorkerReadings(id).subscribe((readings: Reading[]) => {
            this.readings = readings.sort((a, b) => {
              const dateA = new Date(a.read_at!).getTime();
              const dateB = new Date(b.read_at!).getTime();
              return dateB - dateA;
            });
          });
          this.attendanceService.getAttendanceByWorkerId(id).subscribe((attendances: WorkerAttendance[]) => {
            this.attendances = attendances;
          });
        });

      }
    });
  }

  back() {
    this.router.navigate(['/workers']);
  }

  edit() {
    this.router.navigate(['/worker/'+ this.workerId + '/edit']);
  }

  addHelmet(){
    console.log("add helmet");
  }

}

import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { WorkerAttendance } from '../models/worker_attendance';
import { WorksiteService } from '../services/worksite.service';
import { AttendanceService } from '../services/attendance.service';
import { MessageService } from 'primeng/api';
import { HelmetService } from '../services/helmet.service';

@Component({
  selector: 'app-attendances',
  standalone: true,
  imports: [
    ToastModule,
    ButtonModule,
    TableModule,
    CommonModule,
    RouterModule,
  ],
  providers: [MessageService],
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AttendancesComponent {

  attendances: WorkerAttendance[] = [];
  filteredAttendances: WorkerAttendance[] = [];
  workerMap: Map<number, string> = new Map();
  worksiteMap: Map<number, string> = new Map();
  helmetMap: Map<number, string> = new Map();

  constructor(
    private router: Router,
    private messageService: MessageService,
    private worksiteService: WorksiteService,
    private attendanceService: AttendanceService,
    private helmetService: HelmetService 
  ) { }

  ngOnInit() {
    this.attendanceService.getAttendances().subscribe((attendances: WorkerAttendance[]) => {
      this.attendances = attendances.sort((a, b) => b.id - a.id);;
      this.filteredAttendances = [...this.attendances];
    });
    this.worksiteService.getAllWorkers().subscribe((workers: { id: number; name: string }[]) => {
      this.workerMap = new Map(
        workers.map((worker) => [worker.id, worker.name]) 
      );
    });

    this.worksiteService.getWorksites().subscribe((data) => {
      if (data && Array.isArray(data.worksites)) {
        this.worksiteMap = new Map(
          data.worksites.map((worksite: { id: number; name: string }) => [worksite.id, worksite.name])
        );
      } else {
        console.error('Invalid response format:', data);
      }
    });

    this.worksiteService.getHelmets().subscribe((helmets: { id: number; mac_address: string }[]) => {
      this.helmetMap = new Map(
        helmets.map((helmet) => [helmet.id, helmet.mac_address]) // Assuming helmets have `id` and `mac_address` properties
      );
    });
  }

  newAttendance() {
    this.router.navigate(['attendances/quickadd/add']);
  }

  getWorkerName(workerId: number): string {
    return this.workerMap.get(workerId) || 'Unknown';
  }

  // Utility method to get worksite address
  getWorksiteAddress(worksiteId: number): string {
    return this.worksiteMap.get(worksiteId) || 'Unknown';
  }

  // Utility method to get helmet MAC address
  getHelmetMac(helmetId: number): string {
    return this.helmetMap.get(helmetId) || 'Unknown';
  }


}

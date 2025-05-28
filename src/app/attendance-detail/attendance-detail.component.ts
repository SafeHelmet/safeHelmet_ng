import { CommonModule, Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WorkerAttendance } from '../models/worker_attendance';
import { Worker } from '../models/worker';
import { Helmet } from '../models/helmet';
import { Worksite } from '../models/worksite';
import { WorksiteService } from '../services/worksite.service';
import { HelmetService } from '../services/helmet.service';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './attendance-detail.component.html',
  styleUrl: './attendance-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AttendanceDetailComponent {

  attendanceId: string | null = null;
  attendance: WorkerAttendance | null = null;
  worker: Worker | null = null;
  helmet: Helmet | null = null;
  worksite: Worksite | null = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private helmetService: HelmetService,
    private worksiteService: WorksiteService,
    private attendanceService: AttendanceService,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.attendanceId = id;
        this.attendanceService.getAttendanceById(id).subscribe( attendance => {
          this.attendance = attendance;
          if (this.attendance){
            this.worksiteService.getWorkerById(this.attendance.worker_id.toString()).subscribe(worker => {
              this.worker = worker;
            });
            this.worksiteService.getWorksiteById(this.attendance.worksite_id.toString()).subscribe(worksite => {
              this.worksite = worksite;
            });
            this.helmetService.getHelmetById(this.attendance.helmet_id.toString()).subscribe(helmet => {
              this.helmet = helmet;
            });
          }
        });

      }
    });
  }

  back() {
    this.location.back();
  }

  edit() {
    //this.router.navigate(['/helmet/' + this.helmetId + '/edit']);
  }

}

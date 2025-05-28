import { CommonModule, Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { WorksiteService } from '../services/worksite.service';
import { HelmetService } from '../services/helmet.service';
import { AttendanceService } from '../services/attendance.service';
import { WorkerAttendance } from '../models/worker_attendance';
import { DatePickerModule } from 'primeng/datepicker';
import { Worker } from '../models/worker';
import { Helmet } from '../models/helmet';
import { Worksite } from '../models/worksite';
import { AttendanceCreationPojo } from '../models/attendaceCreationPojo';

@Component({
  selector: 'app-attendance-new',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    ToastModule,
    FormsModule,
    DatePickerModule,
  ],
  providers: [MessageService],
  templateUrl: './attendance-new.component.html',
  styleUrl: './attendance-new.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AttendanceNewComponent {

  attendance: WorkerAttendance | undefined;
  workerAttendanceForm!: FormGroup;
  worker: Worker | null = null;
  helmet: Helmet | null = null;
  worksite: Worksite | null = null;
  attendanceCreationPojo: AttendanceCreationPojo | null = null;

  constructor(private route: ActivatedRoute,
    private worksiteService: WorksiteService,
    private helmetService: HelmetService,
    private attendanceService: AttendanceService,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private location: Location,
    
  ){
    this.attendance = history.state.attendance;
    console.log('Received attendance:', this.attendance);
    this.initForm();
    this.fetchDataAndInitializeForm();
  }

  private initForm() {
    this.workerAttendanceForm = this.fb.group({
      worker_name: [{ value: '' }, Validators.required],
      worksite_name: [{ value: '' }, Validators.required],
      helmet_mac: [{ value: '' }, Validators.required],
      start_at: ['', Validators.required],
    });
  }

  private fetchDataAndInitializeForm() {
    if (this.attendance) {
      this.worksiteService
        .getWorkerById(this.attendance.worker_id.toString())
        .subscribe((worker) => {
          this.worker = worker;
          this.updateForm();
        });

      this.worksiteService
        .getWorksiteById(this.attendance.worksite_id.toString())
        .subscribe((worksite) => {
          this.worksite = worksite;
          this.updateForm();
        });

      this.helmetService
        .getHelmetById(this.attendance.helmet_id.toString())
        .subscribe((helmet) => {
          this.helmet = helmet;
          this.updateForm();
        });
    }
  }

  private updateForm() {
    if (this.worker && this.worksite && this.helmet) {
      this.workerAttendanceForm.patchValue({
        worker_name: this.worker.name + " " + this.worker.surname,
        worksite_name: this.worksite.name,
        helmet_mac: this.helmet.mac_address,
      });
    }
  }

  back() {
    this.location.back();
  }

  addAttendance() {
    this.workerAttendanceForm.markAllAsTouched();
    if (this.workerAttendanceForm.valid) {
      if (!this.attendanceCreationPojo) {
        this.attendanceCreationPojo = {
          worker_id: 0,
          worksite_id: 0,
          helmet_id: 0,
          start_at: ''
        };
      }

      this.attendanceCreationPojo.worker_id = this.attendance?.worker_id;
      this.attendanceCreationPojo.worksite_id = this.attendance?.worksite_id;
      this.attendanceCreationPojo.helmet_id = this.attendance?.helmet_id;
      this.attendanceCreationPojo.start_at = this.workerAttendanceForm.value.start_at;

      this.attendanceService.createWorkerAttendance(this.attendanceCreationPojo).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worker attendance created successfully!' });
          setTimeout(() => {
            this.router.navigate(['/worksites/' + this.attendance?.worksite_id]);
          }, 1000);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create worker attendance' });
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }

}

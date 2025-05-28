import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ReadingService } from '../services/reading.service';
import { Reading } from '../models/reading';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { WorksiteService } from '../services/worksite.service';
import { HelmetService } from '../services/helmet.service';
import { AttendanceService } from '../services/attendance.service';
import { WorkerAttendance } from '../models/worker_attendance';
import { Helmet } from '../models/helmet';

@Component({
  selector: 'app-anomalies',
  standalone: true,
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmPopupModule, TableModule, CommonModule, FormsModule, DialogModule, InputTextModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './anomalies.component.html',
  styleUrl: './anomalies.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AnomaliesComponent {

  constructor(
    private messageService: MessageService, 
    private confirmationService: ConfirmationService, 
    private router: Router, 
    private readingService: ReadingService,
    private attendanceService: AttendanceService,
    private helmetService: HelmetService,
    private worksiteService: WorksiteService
  ) { } 

  readings: Reading[] = [];
  filteredReadings: Reading[] = [];
  showFilterDialog: boolean = false;
  attendance_id: number | null = null;
  attendanceMap: Map<number, WorkerAttendance> = new Map();
  helmetMap: Map<number, Helmet> = new Map();

  filterValues = {
    read_at: '',
  };

  ngOnInit() {
    this.readingService.getReadings().subscribe((dataReadings: Reading[]) => {
      this.readings = dataReadings
        .filter(reading => reading.anomaly === true) // Filter for anomaly = true
        .sort((a, b) => new Date(b.read_at!).getTime() - new Date(a.read_at!).getTime()); // Sort by read_at DESC
      this.filteredReadings = [...this.readings];
    });

    this.fetchRelatedData();
  }

  private fetchRelatedData(): void {
    this.attendanceService.getAttendances().subscribe((attendances: WorkerAttendance[]) => {
      this.attendanceMap = new Map(
        attendances.map((attendance) => [attendance.id, attendance])
      );

      this.worksiteService.getHelmets().subscribe((helmets: Helmet[]) => {
        this.helmetMap = new Map(
          helmets
            .filter((helmet) => helmet.id !== undefined) // Filter out helmets with undefined id
            .map((helmet) => [helmet.id as number, helmet]) // Use `as number` since we've filtered out undefined
        );
      });
    });
  }


  getHelmetMacAddress(attendance_id: number | undefined): string {
    if (!attendance_id) return 'N/A';
    const attendance = this.attendanceMap.get(attendance_id);
    if (attendance) {
      const helmet = this.helmetMap.get(attendance.helmet_id);
      return helmet ? helmet.mac_address : 'Unknown Helmet';
    }
    return 'Unknown Attendance';
  }

  formatDateToISO(dateString: string): string {
    const [day, month, year] = dateString.split('/').map((part) => parseInt(part, 10));
    const date = new Date(year, month - 1, day + 1); // Months are zero-based in JavaScript Date
    return date.toISOString().split('T')[0];
  }

  applyFilters() {
    const filterDate = this.filterValues.read_at
      ? this.formatDateToISO(this.filterValues.read_at)
      : null;

    console.log('Filter Date:', filterDate);

    if (filterDate) {
      this.filteredReadings = this.readings.filter((reading) => {
        if (!reading.read_at) {
          return false; // Skip readings with undefined `read_at`
        }
        // Convert the reading's date to ISO format (yyyy-MM-dd)
        const readingDate = new Date(reading.read_at).toISOString().split('T')[0];
        console.log('Reading Date:', readingDate);
        return readingDate === filterDate;
      });
    } else {
      this.filteredReadings = [...this.readings]; // Reset if no date is provided
    }

    this.showFilterDialog = false;
  }

  clearFilter() {
    this.filterValues = {
      read_at: ''
    };

    this.filteredReadings = [...this.readings];
    this.showFilterDialog = false;
  }


}

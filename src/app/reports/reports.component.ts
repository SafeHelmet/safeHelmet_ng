import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { ReadingService } from '../services/reading.service';
import { ToastModule } from 'primeng/toast';
import { Reading } from '../models/reading';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker'; 
import { AttendanceService } from '../services/attendance.service';
import { HelmetService } from '../services/helmet.service';
import { WorkerAttendance } from '../models/worker_attendance';
import { Helmet } from '../models/helmet';
import { WorksiteService } from '../services/worksite.service';


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmPopupModule, TableModule, CommonModule, FormsModule, DialogModule, InputTextModule, DatePickerModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent {

  filteredReadings: Reading [] = [];
  showFilterDialog: boolean = false;
  attendance_id: number | null = null;
  attendanceMap: Map<number, WorkerAttendance> = new Map();
  helmetMap: Map<number, Helmet> = new Map();

  filterValues = {
    read_at: '',
  };

  constructor(
    private messageService: MessageService, 
    private confirmationService: ConfirmationService, 
    private router: Router, 
    private readingService: ReadingService,
    private attendanceService: AttendanceService,
    private helmetService: HelmetService,
    private worksiteService: WorksiteService
  ) {}


  readings: Reading[] = [];

  ngOnInit() {
    this.readingService.getReadings().subscribe((dataReadings: Reading[]) => {
      this.readings = dataReadings.sort((a, b) => {
        const dateA = new Date(a.read_at!).getTime();
        const dateB = new Date(b.read_at!).getTime();
        return dateB - dateA; // Sort descending
      });
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

  newRequestReading() {
    console.log('new');
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


/* this.readings = [
  {
    id: 1,
    read_at: new Date().toISOString(),
    temperature: 25.3,
    humidity: 60.5,
    brightness: 300,
    methane: false,
    carbon_monoxide: false,
    smoke_detection: false,
    uses_welding_protection: true,
    uses_gas_protection: false,
    avg_X: 0.5,
    avg_Y: 0.2,
    avg_Z: 0.8,
    avg_G: 0.6,
    std_X: 0.1,
    std_Y: 0.15,
    std_Z: 0.2,
    std_G: 0.12,
    max_G: 1.2,
    incorrect_posture: 0,
    anomaly: false,
    attendance_id: 101,
    anomalous_temperature: false,
    anomalous_humidity: false,
    anomalous_brightness: false,
    anomalous_max_g: false,
    anomalous_posture: false,
    weather_temperature_max: 30,
    weather_temperature_min: 20,
    weather_temperature: 25,
    weather_humidity: 65,
    weather_brightness: 500,
    WorkerAttendance: undefined,
  }
];
this.filteredReadings = [...this.readings]; */

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

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private readingService: ReadingService) { } 

  readings: Reading[] = [];
  filteredReadings: Reading[] = [];
  showFilterDialog: boolean = false;

  filterValues = {
    read_at: '',
  };

  ngOnInit() {
    this.readingService.getReadings().subscribe((dataReadings: Reading[]) => {
      this.readings = dataReadings.filter(reading => reading.anomaly === true);
      this.filteredReadings = [...this.readings];
    });
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

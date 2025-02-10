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

  filterValues = {
    read_at: '',
  };

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private readingService: ReadingService) {}


  readings: Reading[] = [];

  ngOnInit() {
    this.readingService.getReadings().subscribe((dataReadings: Reading[]) => {
      this.readings=dataReadings;
      this.filteredReadings = [...this.readings];
    });
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

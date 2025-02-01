import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Router, RouterModule } from '@angular/router';
import { WorksiteService } from '../services/worksite.service';
import { Worker } from '../models/worker';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [ConfirmPopupModule, ToastModule, ButtonModule, TableModule, FormsModule, CommonModule, RouterModule, ReactiveFormsModule, InputTextModule, DialogModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkersComponent {

  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];
  showFilterDialog: boolean = false;

  filterValues = {
    name: '',
    surname: '',
    fiscalcode: '',
  };

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private worksiteService: WorksiteService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.worksiteService.getAllWorkers().subscribe((dataWorkers: any) => {
      this.workers = dataWorkers;
      this.filteredWorkers = [...this.workers];
    });
  }

  applyFilters() {
    this.filteredWorkers = this.workers.filter(worker => {
      const matchesName = this.filterValues.name
        ? worker.name.toLowerCase().includes(this.filterValues.name.toLowerCase())
        : true;

      const matchesSurname = this.filterValues.surname
        ? worker.surname.toString().includes(this.filterValues.surname.toString())
        : true;

      const matchesFiscalCode = this.filterValues.fiscalcode
        ? worker.fiscalcode.toLowerCase().includes(this.filterValues.fiscalcode.toLowerCase())
        : true;

      this.showFilterDialog = false;

      return matchesName && matchesSurname && matchesFiscalCode;
    });
  }

  clearFilter() {
    this.filterValues = {
      name: '',
      surname: '',
      fiscalcode: ''
    };

    // Reset the filtered list to show all worksites again
    this.filteredWorkers = [...this.workers];

    // Close the filter dialog
    this.showFilterDialog = false;
  }
}

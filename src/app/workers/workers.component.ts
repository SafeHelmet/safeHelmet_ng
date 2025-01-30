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

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [ConfirmPopupModule, ToastModule, ButtonModule, TableModule, FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkersComponent {

  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];

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
      this.filteredWorkers = this.workers; 
      console.log('Filtered Workers:', this.filteredWorkers);
    });
  }
}

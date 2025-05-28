import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Worker } from '../models/worker';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WorksiteService } from '../services/worksite.service';
import { Location } from "@angular/common";
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-worker-edit',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './worker-edit.component.html',
  styleUrl: './worker-edit.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkerEditComponent {

  workerId: string | null = null;
  worker: Worker | null = null;
  workerForm!: FormGroup;
  selectedWorker: Worker | null = null;
  deleteMessage: string = 'Are you sure you want to delete this worker?';

  @ViewChild('confirmDialog') confirmDialog: any;

  constructor(
    private route: ActivatedRoute, 
    private worksiteService: WorksiteService, 
    private router: Router, private fb: FormBuilder, 
    private messageService: MessageService, 
    private location: Location,
    private confirmationService: ConfirmationService
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.workerId = id;
        this.worksiteService.getWorkerById(id).subscribe(worker => {
          this.worker = worker;

          if (!this.worker) {
            this.back();
            return;
          }


          this.workerForm = this.fb.group({
            name: [this.worker.name, Validators.required],
            surname: [this.worker.surname, Validators.required],
            email: [this.worker.email, Validators.required],
            phone: [this.worker.phone, Validators.required],
            fiscal_code: [this.worker.fiscal_code, Validators.required]
          });

        });
      }
    });
  }


  back() {
    this.location.back();
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this worker?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onConfirmDelete(); 
      },
      reject: () => {
        this.onRejectDelete();
      }
    });
  }

  onConfirmDelete() {
    if (this.workerId) {
      this.worksiteService.deleteWorker(this.workerId).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worker deleted successfully!' });
          this.router.navigate(['/workers']);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete worker' });
        }
      });
    }
  }

  onRejectDelete() {
    this.selectedWorker = null;
  }

  editWorker() {
    this.workerForm.markAllAsTouched();
    if (this.workerForm.valid) {
      console.log(this.workerForm.value);
      if (!this.workerId) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Worker ID is missing.' });
        return;
      }
      const workerData = this.workerForm.value;
      this.worksiteService.editWorkerById(this.workerId, workerData).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worker updated successfully!' });
          setTimeout(() => {
            this.router.navigate(['/worker/' + this.workerId]);
          }, 1000);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update worker' });
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }


}

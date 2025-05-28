import { CommonModule, Location } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { Worker } from '../models/worker';
import { ActivatedRoute, Router } from '@angular/router';
import { BossService } from '../services/boss.service';

@Component({
  selector: 'app-boss-edit',
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
  templateUrl: './boss-edit.component.html',
  styleUrl: './boss-edit.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BossEditComponent {

  workerId: string | null = null;
  worker: Worker | null = null;
  workerForm!: FormGroup;
  selectedWorker: Worker | null = null;
  deleteMessage: string = 'Are you sure you want to delete this worker?';

  @ViewChild('confirmDialog') confirmDialog: any;

  constructor(
    private route: ActivatedRoute,
    private bossService: BossService,
    private router: Router, private fb: FormBuilder,
    private messageService: MessageService,
    private location: Location,
    private confirmationService: ConfirmationService
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.workerId = id;
        this.bossService.getBossById(id).subscribe(worker => {
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
      message: 'Are you sure you want to delete this boss?',
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
      this.bossService.deleteBoss(this.workerId).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Boss deleted successfully!' });
          this.router.navigate(['/bosses']); 
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete boss' });
        }
      });
    }
  }

  onRejectDelete() {
    this.selectedWorker = null;
  }

  editBoss() {
    this.workerForm.markAllAsTouched();
    if (this.workerForm.valid) {
      console.log(this.workerForm.value);
      if (!this.workerId) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Worker ID is missing.' });
        return;
      }
      const workerData = this.workerForm.value;
      this.bossService.editBossById(this.workerId, workerData).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Boss updated successfully!' });
          setTimeout(() => {
            this.router.navigate(['/boss/' + this.workerId]);
          }, 1000);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update boss' });
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }



}

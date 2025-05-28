import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { WorksiteService } from '../services/worksite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Worker } from '../models/worker';
import { AssignBodyPojo } from '../models/assignBodyPojo';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-worker-new',
  imports: [ButtonModule,
            InputTextModule,
            ReactiveFormsModule,
            CommonModule,
            ToastModule,
            FormsModule,
            TableModule,
            DialogModule,
            ConfirmDialogModule
          ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './worker-new.component.html',
  styleUrl: './worker-new.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkerNewComponent {

  workerForm!: FormGroup;
  worksiteId: string | null = null;
  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];
  showSearchDialog: boolean = false;
  assignBody: AssignBodyPojo | null = null; 

  filterValues = {
    name: '',
    surname: '',
    fiscal_code: '',
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private messageService: MessageService,
              private worksiteService: WorksiteService,
              private confirmationService: ConfirmationService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.worksiteId = id;
        console.log(this.worksiteId);
      }
    });
  }

  ngOnInit() {
    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      fiscal_code: ['', Validators.required]
    });
  }

  back() {
    this.router.navigate(['/worksites/' + this.worksiteId]);
  }

  lookup(){
    this.showSearchDialog = true;
    this.worksiteService.getAllWorkers().subscribe((dataWorkers: any) => {
      this.workers = dataWorkers;
      this.filteredWorkers = [...this.workers];
    });
  }


  addWorker() {
    this.workerForm.markAllAsTouched();
    if (this.workerForm.valid) {
      const workerData = this.workerForm.value;

      this.worksiteService.createWorker(workerData).subscribe({
        next: (response) => {
          // Assuming the response contains the newly created worker's ID
          const newWorkerId = response?.id; // Adjust according to your API response format

          if (newWorkerId && this.worksiteId) {
            const bossId = localStorage.getItem('boss_id');
            const assignBody: AssignBodyPojo = {
              worker_id: newWorkerId,
              worksite_id: parseInt(this.worksiteId),
              assigned_by: bossId ? parseInt(bossId, 10) : 0
            };

            this.worksiteService.assignWorker(assignBody).subscribe({
              next: () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Worker hired and assigned successfully!'
                });

                setTimeout(() => {
                  this.router.navigate(['/worksites/' + this.worksiteId]);
                }, 1000);
              },
              error: (assignError) => {
                console.error(assignError);
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'Failed to assign worker to worksite.'
                });
              }
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Invalid worker or worksite ID.'
            });
          }
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create worker.'
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all fields.'
      });
    }
  }


  hireExisting(selworker: Worker) {

    if (!selworker.id) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Worker ID is missing' });
      return; // Exit the function if ID is undefined
    }



    if (!this.assignBody) {
      this.assignBody = {
        worker_id: 0,
        worksite_id: 0,
        assigned_by: 0
      };
    }
    this.assignBody.worker_id = selworker.id; // Convert number to string
    this.assignBody.worksite_id = this.worksiteId ? parseInt(this.worksiteId) : undefined; // Ensure a default value
    const bossId = localStorage.getItem('boss_id');
    this.assignBody.assigned_by = bossId ? parseInt(bossId, 10) : 0;

    this.worksiteService.assignWorker(this.assignBody).subscribe({
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worker hired successfully!' });
        setTimeout(() => {
          this.router.navigate(['/worksites/' + this.worksiteId]);
        }, 1000);
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to hire worker' });
      }
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

      const matchesFiscalCode = this.filterValues.fiscal_code
        ? worker.fiscal_code.toLowerCase().includes(this.filterValues.fiscal_code.toLowerCase())
        : true;

      return matchesName && matchesSurname && matchesFiscalCode;
    });
  }

  clearFilter() {
    this.filterValues = {
      name: '',
      surname: '',
      fiscal_code: ''
    };

    this.filteredWorkers = [...this.workers];
  }



}

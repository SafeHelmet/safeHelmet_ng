import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Worker } from '../models/worker';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule, Location } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksiteService } from '../services/worksite.service';
import { HelmetService } from '../services/helmet.service';
import { AttendanceService } from '../services/attendance.service';
import { Helmet } from '../models/helmet';
import { Worksite } from '../models/worksite';
import { DatePickerModule } from 'primeng/datepicker';
import { Category } from '../models/category';
import { WorkerAttendance } from '../models/worker_attendance';
import { AttendanceCreationPojo } from '../models/attendaceCreationPojo';

@Component({
  selector: 'app-attendances-quickadd',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    ToastModule,
    FormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DatePickerModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './attendances-quickadd.component.html',
  styleUrl: './attendances-quickadd.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AttendancesQuickaddComponent {

  workerForm!: FormGroup;
  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];
  helmets: Helmet[] = [];
  filteredHelmets: Helmet[] = [];
  worksites: Worksite[] = [];
  filteredWorksites: Worksite[] = [];
  showWorkerDialog: boolean = false;
  showWorksiteDialog: boolean = false;
  showHelmetDialog: boolean = false;
  categoryMap: { [id: number]: string } = {};
  selectedWorker: Worker | null = null;
  selectedHelmet: Helmet | null = null;
  selectedWorksite: Worksite | null = null;
  workerAttendanceForm!: FormGroup;

  attendancePojo: AttendanceCreationPojo = {
    worker_id: 0,
    worksite_id: 0,
    helmet_id: 0,
    start_at: ''
  };

  filterWorkerValues = {
    name: '',
    surname: '',
    fiscal_code: '',
  };

  filterWorksiteValues = {
    name: '',
    address: '',
    city: '',
  };

  filterHelmetValues = {
    mac_address: ''
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private worksiteService: WorksiteService,
    private helmetService: HelmetService,
    private attendanceService: AttendanceService,
    private confirmationService: ConfirmationService,
    private location: Location) {
      this.initForm();
    }


  
  back() {
    this.location.back();
  }

  private initForm() {
    this.workerAttendanceForm = this.fb.group({
      worker_name: ['', Validators.required],
      worksite_name: ['', Validators.required],
      helmet_mac: ['', Validators.required],
      start_at: ['', Validators.required],
    });
  }


  lookupWorker() {
    this.showWorkerDialog = true;
    this.worksiteService.getAllWorkers().subscribe((dataWorkers: any) => {
      this.workers = dataWorkers;
      this.filteredWorkers = [...this.workers];
    });

  }

  lookupWorksite() {
    this.showWorksiteDialog = true;
    this.worksiteService.getWorksites().subscribe((dataWorksites: any) => {
      this.worksites = dataWorksites.worksites;
      this.filteredWorksites = [...this.worksites];
    });
  }

  lookupHelmet() {
    this.showHelmetDialog = true;
    this.worksiteService.getHelmets().subscribe((dataHelmets: Helmet[]) => {
      this.helmets = dataHelmets;
      this.filteredHelmets = [...this.helmets];
      // Fetch categories
      this.helmetService.getHelmetCategories().subscribe((categories: Category[]) => {
        this.categoryMap = categories.reduce((map: { [id: number]: string }, category: Category) => {
          if (category.id !== undefined) { // Type guard to ensure id is defined
            map[category.id] = category.name;
          }
          return map;
        }, {});

        // Assign category names to helmets
        this.helmets.forEach((helmet: Helmet) => {
          if (helmet.Category && helmet.category_id) { // Check if Category is defined
            helmet.Category.name = this.categoryMap[helmet.category_id] || 'Unknown';
          } else {
            helmet.Category = { id: 0, name: 'Unknown' }; // Handle undefined Category
          }
        });

      });
    });


  }

  applyWorkerFilters() {
    this.filteredWorkers = this.workers.filter(worker => {
      const matchesName = this.filterWorkerValues.name
        ? worker.name.toLowerCase().includes(this.filterWorkerValues.name.toLowerCase())
        : true;

      const matchesSurname = this.filterWorkerValues.surname
        ? worker.surname.toString().includes(this.filterWorkerValues.surname.toString())
        : true;

      const matchesFiscalCode = this.filterWorkerValues.fiscal_code
        ? worker.fiscal_code.toLowerCase().includes(this.filterWorkerValues.fiscal_code.toLowerCase())
        : true;


      return matchesName && matchesSurname && matchesFiscalCode;
    });
  }

  applyWorksiteFilters() {
    this.filteredWorksites = this.worksites.filter(worksite => {
      const matchesName = this.filterWorksiteValues.name
        ? worksite.name.toLowerCase().includes(this.filterWorksiteValues.name.toLowerCase())
        : true;

      const matchesAddress = this.filterWorksiteValues.address
        ? worksite.address.toString().includes(this.filterWorksiteValues.address.toString())
        : true;

      const matchesCity = this.filterWorksiteValues.city
        ? worksite.city.toLowerCase().includes(this.filterWorksiteValues.city.toLowerCase())
        : true;


      return matchesName && matchesAddress && matchesCity;
    });
  }

  applyHelmetFilters() {
    this.filteredHelmets = this.helmets.filter(helmet => {
      const matchesMacAddress = this.filterHelmetValues.mac_address
        ? helmet.mac_address.toLowerCase().includes(this.filterHelmetValues.mac_address.toLowerCase())
        : true;


      return matchesMacAddress;
    });
  }

  clearFilter() {
    this.filterWorkerValues = {
      name: '',
      surname: '',
      fiscal_code: ''
    };

    this.filterWorksiteValues = {
      name: '',
      address: '',
      city: '',
    };

    this.filterHelmetValues = {
      mac_address: ''
    };

    this.filteredWorkers = [...this.workers];
    this.filteredWorksites = [...this.worksites];
    this.filteredHelmets = [...this.helmets];
    this.showWorkerDialog = false;
    this.showWorksiteDialog = false;
    this.showHelmetDialog = false;
  }

  selectWorker(worker: Worker) {
    if (worker){
      this.attendancePojo.worker_id = worker.id;
      this.selectedWorker = worker;
      this.workerAttendanceForm.patchValue({ worker_name: worker.name + ' ' + worker.surname });
      this.messageService.add({ severity: 'info', summary: 'Worker Selected', detail: `Selected Worker ID: ${worker.id}` });
    }
    this.showWorkerDialog = false;
  }

  selectWorksite(worksite: Worksite) {
    if (worksite) {
      this.attendancePojo.worksite_id = worksite.id;
      this.selectedWorksite = worksite;
      this.workerAttendanceForm.patchValue({ worksite_name: worksite.name });
      this.messageService.add({ severity: 'info', summary: 'Worksite Selected', detail: `Selected Worksite ID: ${worksite.id}` });
    }
    this.showWorksiteDialog = false;
  }

  selectHelmet(helmet: Helmet) {
    if (helmet) {
      this.attendancePojo.helmet_id = helmet.id;
      this.selectedHelmet = helmet;
      this.workerAttendanceForm.patchValue({ helmet_mac: helmet.mac_address });
      this.messageService.add({ severity: 'info', summary: 'Helmet Selected', detail: `Selected Helmet MAC: ${helmet.mac_address}` });
    }
    this.showHelmetDialog = false;
  }

  addQuickAttendance() {
    this.workerAttendanceForm.markAllAsTouched();
    if (this.workerAttendanceForm.valid) {
      this.attendancePojo.start_at = this.workerAttendanceForm.value.start_at;
      this.attendanceService.createWorkerAttendance(this.attendancePojo).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worker attendance created successfully!' });
          setTimeout(() => {
            this.router.navigate(['/attendances']);
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

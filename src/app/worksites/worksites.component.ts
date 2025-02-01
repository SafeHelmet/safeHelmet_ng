import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Worksite } from '../models/worksite';
import { RouterModule } from '@angular/router';
import { WorksiteService } from '../services/worksite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-worksites',
  standalone: true,
  imports: [ConfirmPopupModule,
     ToastModule,
      ButtonModule,
      TableModule,
      FormsModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      DialogModule,
    InputTextModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './worksites.component.html',
  styleUrls: ['./worksites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorksitesComponent {
  worksites: Worksite[] = [];
  filteredWorks: Worksite[] = [];
  filterValue: string = '';
  showFilterDialog: boolean = false;
  filterWorksiteForm!: FormGroup;

  filterValues = {
    name: '',
    address: '',
    city: '',
  };

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private worksiteService: WorksiteService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.worksiteService.getWorksites().subscribe((dataWorksites: any) => {
      this.worksites = dataWorksites.worksites;
      this.filteredWorks = [...this.worksites];
    });

    this.filterWorksiteForm = this.fb.group({
      name: [''],
      code: [''],
    });
  }


  applyFilters() {
    this.filteredWorks = this.worksites.filter(worksite => {
      const matchesName = this.filterValues.name
        ? worksite.name.toLowerCase().includes(this.filterValues.name.toLowerCase())
        : true;

      const matchesAddress = this.filterValues.address
        ? worksite.address.toString().includes(this.filterValues.address.toString())
        : true;

      const matchesCity = this.filterValues.city
        ? worksite.city.toLowerCase().includes(this.filterValues.city.toLowerCase())
        : true;

      this.showFilterDialog = false;

      return matchesName && matchesAddress && matchesCity;
    });
  }

  clearFilter() {
    this.filterValues = {
      name: '',
      address: '',
      city: ''
    };

    // Reset the filtered list to show all worksites again
    this.filteredWorks = [...this.worksites];

    // Close the filter dialog
    this.showFilterDialog = false;
  }

  newWorksite() {
    this.router.navigate(['/worksite/new']);
  }

  onRowEditCancel(worksite: Worksite, ri: number) {
    console.log('cancel');
  }

  onRowEditSave(worksite: Worksite) {
    if (worksite.id === undefined) return;

    console.log('save');
    this.worksites[worksite.id - 1].name = worksite.name;
    this.worksites[worksite.id - 1].description = worksite.description;
    this.worksites[worksite.id - 1].active = worksite.active;
  }

  onRowEditInit(worksite: Worksite) {
    console.log('init');
  }


}

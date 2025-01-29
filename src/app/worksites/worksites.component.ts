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

@Component({
  selector: 'app-worksites',
  standalone: true,
  imports: [ConfirmPopupModule, ToastModule, ButtonModule, TableModule, FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './worksites.component.html',
  styleUrls: ['./worksites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorksitesComponent {
  worksites: Worksite[] = [];
  filteredWorksites: Worksite[] = [];
  filterValue: string = '';
  showFilterInput: boolean = false;
  filterWorksiteForm!: FormGroup;

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
      this.filteredWorksites = this.worksites; // Initialize the filtered list
    });

    this.filterWorksiteForm = this.fb.group({
      name: [''],
      code: [''],
    });
  }

  toggleFilterInput() {
    this.showFilterInput = !this.showFilterInput;
  }

  filterWorksites() {
    const filter = this.filterValue.toLowerCase();
    this.filteredWorksites = this.worksites.filter((worksite) =>
      worksite.name.toLowerCase().includes(filter) || worksite.city.toLowerCase().includes(filter)
    );
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

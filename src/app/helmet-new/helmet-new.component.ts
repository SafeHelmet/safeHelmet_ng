import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { WorksiteService } from '../services/worksite.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CreateHelmetPojo } from '../models/createHelmetPojo';
import { HelmetService } from '../services/helmet.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Category } from '../models/category';


@Component({
  selector: 'app-helmet-new',
  imports: [
            ButtonModule,
            InputTextModule,
            ReactiveFormsModule,
            CommonModule,
            ToastModule,
            FormsModule,
            AutoCompleteModule,
            TableModule,
            DialogModule,
           ],
  providers: [MessageService],
  templateUrl: './helmet-new.component.html',
  styleUrl: './helmet-new.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HelmetNewComponent {
  helmetForm!: FormGroup;
  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];
  createHelmet: CreateHelmetPojo | null = null;
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  showSearchDialog: boolean = false;

  filterValues = {
    name: ''
  };

  constructor(private router: Router, 
              private fb: FormBuilder, 
              private messageService: MessageService, 
              private worksiteService: WorksiteService, 
              private helmetService: HelmetService) {}

  ngOnInit() {
    this.helmetForm = this.fb.group({
      mac_address: ['', Validators.required],
      category_id: [, Validators.required]
    });
  }

  back() {
    this.router.navigate(['/helmets']);
  }

  lookup() {
    this.showSearchDialog = true;
    this.helmetService.getHelmetCategories().subscribe((dataCategories: any) => {
      this.categories = dataCategories;
      this.filteredCategories = [...this.categories];
    });
  }

  applyFilters() {
    this.filteredCategories = this.categories.filter(category => {
      const matchesName = this.filterValues.name
        ? category.name.toLowerCase().includes(this.filterValues.name.toLowerCase())
        : true;

      return matchesName;
    });
  }

  clearFilter() {
    this.filterValues = {
      name: ''
    };

    this.filteredCategories = [...this.categories];
  }

  selectCategory(category: Category) {
    if (!category.id) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cateogry ID is missing' });
      return;
    }
    this.helmetForm.patchValue({ category_id: category.id });
    this.messageService.add({ severity: 'info', summary: 'Category Selected', detail: `Selected Category ID: ${category.id}` });
    this.showSearchDialog = false;
  }


  addHelmet() {
    this.helmetForm.markAllAsTouched();
    if (this.helmetForm.valid) {

      if (!this.createHelmet) {
        this.createHelmet = {
          category_id: 0,
          mac_address: ""
        };
      }

      const helmetData = this.helmetForm.value;
      this.createHelmet.category_id = helmetData.category_id;
      this.createHelmet.mac_address = helmetData.mac_address;

      this.helmetService.addHelmet(this.createHelmet).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Helmet added successfully!' });
          setTimeout(() => {
            this.router.navigate(['/helmets']);
          }, 1000);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add helmet' });
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }


}

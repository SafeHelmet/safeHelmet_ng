import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { WorksiteService } from '../services/worksite.service';
import { Helmet } from '../models/helmet';
import { Category } from '../models/category';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { HelmetService } from '../services/helmet.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-helmets',
  standalone: true,
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmPopupModule, TableModule, CommonModule, FormsModule, DialogModule, InputTextModule, ReactiveFormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './helmets.component.html',
  styleUrl: './helmets.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HelmetsComponent {

  constructor(private messageService: MessageService, 
    private confirmationService: ConfirmationService, 
    private router: Router, 
    private worksiteService: WorksiteService,
    private helmetService: HelmetService ) { }

  confirm() {
    console.log("backshot");
    this.confirmationService.confirm({
      message: 'Are you sure you want to proceed?',
      accept: () => {
        console.log('Confirmed');
        this.messageService.add({ severity: 'warn', summary: 'Action', detail: 'Worksite saved!' });
      }
    });
  }

  helmets: Helmet[] = [];
  filteredHelmets: Helmet[] = [];
  showFilterDialog: boolean = false;
  categoryMap: { [id: number]: string } = {};
  filterValues = {
    mac_address: ''
  };

  ngOnInit() {
    this.worksiteService.getHelmets().subscribe((dataHelmets: Helmet[]) => {
      this.helmets = dataHelmets;
      this.filteredHelmets = [...this.helmets];
      console.log(this.helmets);


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

        console.log(this.helmets);
      });
    });
  }

  newHelmet() {
    this.router.navigate(['helmet/new'])
  }

  applyFilters() {
    this.filteredHelmets = this.helmets.filter(helmet => {
      const matchesMacAddress = this.filterValues.mac_address
        ? helmet.mac_address.toLowerCase().includes(this.filterValues.mac_address.toLowerCase())
        : true;

      this.showFilterDialog = false;

      return matchesMacAddress;
    });
  }

  clearFilter() {
    this.filterValues = {
      mac_address: ''
    };

    // Reset the filtered list to show all worksites again
    this.filteredHelmets = [...this.helmets];

    // Close the filter dialog
    this.showFilterDialog = false;
  }


}

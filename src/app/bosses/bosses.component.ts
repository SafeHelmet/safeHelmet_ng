import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Worker } from '../models/worker';
import { BossService } from '../services/boss.service';

@Component({
  selector: 'app-bosses',
  standalone: true,
  imports: [
    ConfirmPopupModule, 
    ToastModule, 
    ButtonModule, 
    TableModule, 
    FormsModule, 
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule, 
    InputTextModule, 
    DialogModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './bosses.component.html',
  styleUrl: './bosses.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BossesComponent {

  bosses: Worker[] = [];
  filteredBosses: Worker[] = [];
  showFilterDialog: boolean = false;

  filterValues = {
    name: '',
    surname: '',
    fiscal_code: '',
  };
  
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private bossService: BossService,
  ) { }

  ngOnInit() {
    this.bossService.getAllBosses().subscribe( bosses => {
      this.bosses = bosses;
      this.filteredBosses = [...this.bosses];
    });
  }

  newBoss() {
    this.router.navigate(['/bosses/new']);
  }

  applyFilters() {
    this.filteredBosses = this.bosses.filter(boss => {
      const matchesName = this.filterValues.name
        ? boss.name.toLowerCase().includes(this.filterValues.name.toLowerCase())
        : true;

      const matchesSurname = this.filterValues.surname
        ? boss.surname.toString().includes(this.filterValues.surname.toString())
        : true;

      const matchesFiscalCode = this.filterValues.fiscal_code
        ? boss.fiscal_code.toLowerCase().includes(this.filterValues.fiscal_code.toLowerCase())
        : true;

      this.showFilterDialog = false;

      return matchesName && matchesSurname && matchesFiscalCode;
    });
  }

  clearFilter() {
    this.filterValues = {
      name: '',
      surname: '',
      fiscal_code: ''
    };

    // Reset the filtered list to show all worksites again
    this.filteredBosses = [...this.bosses];

    // Close the filter dialog
    this.showFilterDialog = false;
  }

}

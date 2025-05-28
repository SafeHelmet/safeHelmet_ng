import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Worker } from '../models/worker';
import { BossService } from '../services/boss.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-boss-selection',
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    ToastModule,
    FormsModule,
    TableModule,
    DialogModule,
  ],
  providers: [MessageService],
  templateUrl: './boss-selection.component.html',
  styleUrl: './boss-selection.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BossSelectionComponent {

  showSearchDialog: boolean = true;
  bosses: Worker[] = [];
  filteredBosses: Worker[] = [];

  filterValues = {
    name: '',
    surname: '',
    fiscal_code: '',
  };

  constructor(private bossService: BossService, 
              private router: Router, 
              private messageService: MessageService) {
    this.bossService.getAllBosses().subscribe((dataBosses: any) => {
      this.bosses = dataBosses;
      this.filteredBosses = [...this.bosses];
    });
  }


  selectBoss(boss: Worker) {
    if (!boss.id) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Boss ID is missing' });
      return; 
    }

    localStorage.setItem('boss_id', boss.id.toString());

    this.router.navigate(['/worksites']);
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

      return matchesName && matchesSurname && matchesFiscalCode;
    });
  }

  clearFilter() {
    this.filterValues = {
      name: '',
      surname: '',
      fiscal_code: ''
    };

    this.filteredBosses = [...this.bosses];
  }




}

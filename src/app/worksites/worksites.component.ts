import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Worker } from '../models/worker';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Worksite } from '../models/worksite';
import { RouterModule } from '@angular/router';
import { WorksiteService } from '../services/worksite.service';

@Component({
  selector: 'app-worksites',
  standalone: true,
  imports: [ConfirmPopupModule, ToastModule, ButtonModule, TableModule, FormsModule, CommonModule, RouterModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './worksites.component.html',
  styleUrl: './worksites.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorksitesComponent {


  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private worksiteService: WorksiteService) {}

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

  worksites: Worksite[] = [];

  ngOnInit() {
    this.worksiteService.getWorksites().subscribe((dataWorksites: any) => {
      this.worksites = dataWorksites.worksites;
    });
  }

  /* worksites: Worksite[] = [
    {
      id: 1,
      name: 'Worksite 1',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      latitude: 123,
      longitude: 123,
      start_date_of_work: new Date(),
      end_date_of_work: new Date(),
      created_at: new Date(),
      description: 'Description 1',
      active: true
    },
    {
      id: 2,
      name: 'Worksite 2',
      address: '456 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      latitude: 123,
      longitude: 123,
      start_date_of_work: new Date(),
      end_date_of_work: new Date(),
      created_at: new Date(),
      description: 'Description 2',
      active: true
    }
  ]; */

 

  workers: Worker[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      active: true
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      active: true
    }
  ];

  onRowEditInit(worksite: Worksite) {
    console.log('init');
  }

  onRowEditSave(worksite: Worksite) {
    if (worksite.id === undefined) return;
    
    console.log('save');
    this.worksites[worksite.id - 1].name = worksite.name;
    this.worksites[worksite.id - 1].description = worksite.description;
    this.worksites[worksite.id - 1].active = worksite.active;
  }

  onRowEditCancel(worksite: Worksite, ri: number) {
    console.log('cancel');
  } 

  newWorksite() {
    this.router.navigate(['/worksite/new']);
  }

}

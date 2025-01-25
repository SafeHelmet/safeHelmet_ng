import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ReadingService } from '../services/reading.service';
import { Reading } from '../models/reading';

@Component({
  selector: 'app-anomalies',
  standalone: true,
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmPopupModule, TableModule, CommonModule, FormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './anomalies.component.html',
  styleUrl: './anomalies.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AnomaliesComponent {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private readingService: ReadingService) { } 

  readings: Reading[] = [];

  ngOnInit() {
    this.readingService.getReadings().subscribe((dataReadings: Reading[]) => {
      this.readings = dataReadings.filter(reading => reading.anomalous === true);
    });
  }

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


}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { ReadingService } from '../services/reading.service';
import { ToastModule } from 'primeng/toast';
import { Reading } from '../models/reading';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmPopupModule, TableModule, CommonModule, FormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private readingService: ReadingService) {}

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

  readings: Reading[] = [];

  ngOnInit() {
    this.readingService.getReadings().subscribe((dataReadings: Reading[]) => {
      this.readings=dataReadings;
    });
  }

  newRequestReading() {
    console.log('new');
  }

  clickBtn() {
    console.log("gfdsasdfg");
  }


}

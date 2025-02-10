import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { WorksiteService } from '../services/worksite.service';
import { Helmet } from '../models/helmet';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-helmets',
  imports: [RouterLink, ButtonModule, ToastModule, ConfirmPopupModule, TableModule, CommonModule, FormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './helmets.component.html',
  styleUrl: './helmets.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HelmetsComponent {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private worksiteService: WorksiteService) { }

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

  ngOnInit() {
    this.worksiteService.getHelmets().subscribe((dataHelmets: Helmet[]) => {
      this.helmets = dataHelmets;
      console.log(this.helmets);

    });
  }

  newHelmet() {
    this.router.navigate(['helmet/new'])
  }


}

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Helmet } from '../models/helmet';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HelmetService } from '../services/helmet.service';

@Component({
  selector: 'app-helmet-edit',
  imports: [ButtonModule,
            InputTextModule,
            ReactiveFormsModule,
            CommonModule,
            ToastModule,
            FormsModule,
            ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './helmet-edit.component.html',
  styleUrl: './helmet-edit.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HelmetEditComponent {

  helmetId: string | null = null;
  helmet: Helmet | null = null;
  helmetForm!: FormGroup;
  deleteMessage: string = 'Are you sure you want to delete this helmet?';

  @ViewChild('confirmDialog') confirmDialog: any;

  constructor(private route: ActivatedRoute,
    private helmetService: HelmetService,
    private router: Router, private fb: FormBuilder,
    private messageService: MessageService,
    private location: Location,
    private confirmationService: ConfirmationService
  ) { 
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.helmetId = id;
        this.helmetService.getHelmetById(id).subscribe(helmet => {
          this.helmet = helmet;

          if (!this.helmet) {
            this.back();
            return;
          }


          this.helmetForm = this.fb.group({
            mac_address: [this.helmet.mac_address, Validators.required],
            category_id: [this.helmet.category_id, Validators.required],
          });

        });
      }
    });
  } 


  back() {
    this.location.back();
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this helmet?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onConfirmDelete();
      },
      reject: () => {
        this.onRejectDelete();
      }
    });
  }

  onConfirmDelete() {
    if (this.helmetId) {
      this.helmetService.deleteHelmet(this.helmetId).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Helmet deleted successfully!' });
          this.router.navigate(['/helmets']); 
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete helmet' });
        }
      });
    }
  }

  onRejectDelete() {
    return;
  }

  editHelmet() {
    this.helmetForm.markAllAsTouched();
    if (this.helmetForm.valid) {
      console.log(this.helmetForm.value);
      if (!this.helmetId) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Helmet ID is missing.' });
        return;
      }
      const helmetData = this.helmetForm.value;
      this.helmetService.editHelmetById(this.helmetId, helmetData).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worker added successfully!' });
          setTimeout(() => {
            this.router.navigate(['/helmet/' + this.helmetId]);
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

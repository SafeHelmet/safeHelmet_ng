import { CommonModule, Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BossService } from '../services/boss.service';

@Component({
  selector: 'app-boss-new',
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    ToastModule,
    FormsModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './boss-new.component.html',
  styleUrl: './boss-new.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BossNewComponent {
  workerForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private bossService: BossService,
    private confirmationService: ConfirmationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      fiscal_code: ['', Validators.required]
    });
  }

  back() {
    this.location.back();
  }

  addBoss() {
    this.workerForm.markAllAsTouched();
    if (this.workerForm.valid) {
      const workerData = this.workerForm.value;

      this.bossService.addBoss(workerData).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Boss created successfully!'
          });
          setTimeout(() => {
            this.router.navigate(['/bosses']);
          }, 1000);
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create worker.'
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all fields.'
      });
    }
  }
  
}

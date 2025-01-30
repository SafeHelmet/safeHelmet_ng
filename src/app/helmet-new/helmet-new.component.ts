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


@Component({
  selector: 'app-helmet-new',
  imports: [
            ButtonModule,
            InputTextModule,
            ReactiveFormsModule,
            CommonModule,
            ToastModule,
            FormsModule,
            AutoCompleteModule
           ],
  providers: [MessageService],
  templateUrl: './helmet-new.component.html',
  styleUrl: './helmet-new.component.css',
  
})
export class HelmetNewComponent {
  helmetForm!: FormGroup;
  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];

  constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService, private worksiteService: WorksiteService) {}

  ngOnInit() {
    this.helmetForm = this.fb.group({
      category: ['', Validators.required],
      workerId: ['', Validators.required],
      sensor1: ['', Validators.required],
      sensor2: ['', Validators.required],
      sensor3: ['', Validators.required]
    });
  }

  back() {
    this.router.navigate(['/helmets']);
  }


  addHelmet() {
    this.helmetForm.markAllAsTouched();
    if (this.helmetForm.valid) {
      console.log(this.helmetForm.value);
      const helmetData = this.helmetForm.value;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }

}

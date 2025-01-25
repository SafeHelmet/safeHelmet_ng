import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { WorksiteService } from '../services/worksite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-worker-new',
  imports: [ButtonModule,
            InputTextModule,
            ReactiveFormsModule,
            CommonModule,
            ToastModule,
            FormsModule
          ],
  providers: [MessageService],
  templateUrl: './worker-new.component.html',
  styleUrl: './worker-new.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorkerNewComponent {

  workerForm!: FormGroup;
  worksiteId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private messageService: MessageService, private worksiteService: WorksiteService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.worksiteId = id;
      }
    });
  }

  ngOnInit() {
    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      worksiteId: ['', Validators.required]
    });
  }

  back() {
    this.router.navigate(['/worksites']);
  }


  addWorker() {
    this.workerForm.markAllAsTouched();
    if (this.workerForm.valid) {
      console.log(this.workerForm.value);
      const workerData = this.workerForm.value;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }


}

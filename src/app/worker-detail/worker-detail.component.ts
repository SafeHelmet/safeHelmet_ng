import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WorksiteService } from '../services/worksite.service';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-worker-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './worker-detail.component.html',
  styleUrl: './worker-detail.component.css'
})
export class WorkerDetailComponent {

  workerId: string | null = null;
  worker: Worker | null = null;
  worksiteName: string | null = null;

  constructor(private route: ActivatedRoute, private workisteService: WorksiteService, private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.workerId = id;
        this.workisteService.getWorkerById(id).subscribe(worker => {
          this.worker = worker;
          this.worksiteName="Worksite 1";
        });

      }
    });
  }

  back() {
    this.router.navigate(['/workers']);
  }

  edit() {
    this.router.navigate(['/worker/'+ this.workerId + '/edit']);
  }

  addHelmet(){
    console.log("add helmet");
  }

}

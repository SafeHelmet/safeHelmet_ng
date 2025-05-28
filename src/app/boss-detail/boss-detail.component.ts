import { CommonModule, Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BossService } from '../services/boss.service';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-boss-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './boss-detail.component.html',
  styleUrl: './boss-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BossDetailComponent {
  workerId: string | null = null;
  worker: Worker | null = null;
  worksiteName: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private bossService: BossService,
    private router: Router,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.workerId = id;
        this.bossService.getBossById(id).subscribe(worker => {
          this.worker = worker;
        });

      }
    });
  }

  back() {
    this.location.back();
  }

  edit() {
    this.router.navigate(['/boss/' + this.workerId + '/edit']);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Worksite } from '../models/worksite';
import { CommonModule } from '@angular/common';
import { WorksiteService } from '../services/worksite.service';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import * as L from 'leaflet';


@Component({
  selector: 'app-worksite-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, TabsModule, TableModule],
  templateUrl: './worksite-detail.component.html',
  styleUrl: './worksite-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorksiteDetailComponent {

  worksiteId: string | null = null;
  worksite: Worksite | null = null;
  workers: Worker[] = [];

  map!: L.Map;
  constructor(private route: ActivatedRoute, private worksiteService: WorksiteService, private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.worksiteId = id;
        this.worksiteService.getWorksiteById(id).subscribe(worksite => {
          this.worksite = worksite;
          this.initializeMap();
        });
      }
    });
  }

  back() {
    this.router.navigate(['/worksites']);
  }

  newWorker() {
    this.router.navigate(['worker/new']);
  }

  editWorker() {
    this.router.navigate(['worksite/'+this.worksiteId+'/edit']);
  }

  ngOnInit() {
    const defaultIcon = L.icon({
      iconUrl: 'assets/images/leaflet/marker-icon.png',
      iconRetinaUrl: 'assets/images/leaflet/marker-icon-2x.png',
      shadowUrl: 'assets/images/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = defaultIcon;
    //this.getWorkers();
  }

  /* getWorkers() {
    if (this.worksiteId) {
      this.worksiteService.getWorkers(this.worksiteId).subscribe( workers => {
        this.workers = workers;
      });
    }
  } */
  
  initializeMap() {
    if (this.worksite) {
      this.map = L.map('map').setView([this.worksite.latitude, this.worksite.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
      L.marker([this.worksite.latitude, this.worksite.longitude]).addTo(this.map);
    }
  }
}

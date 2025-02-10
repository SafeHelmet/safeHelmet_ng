import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Worksite } from '../models/worksite';
import { CommonModule } from '@angular/common';
import { WorksiteService } from '../services/worksite.service';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import * as L from 'leaflet';
import { Worker } from '../models/worker';
import { Reading } from '../models/reading';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-worksite-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, TabsModule, TableModule, DialogModule, RouterLink],
  templateUrl: './worksite-detail.component.html',
  styleUrl: './worksite-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorksiteDetailComponent {

  worksiteId: string | null = null;
  worksite: Worksite | null = null;
  workers: Worker[] = [];
  readings: Reading[] = [];
  weather: Weather | null = null;
  formattedStartDate: string | null = null;
  formattedEndDate: string | null = null;
  showWeatherDialog: boolean = false;
  isCelsius: boolean = true;

  map!: L.Map;
  constructor(private route: ActivatedRoute, private worksiteService: WorksiteService, private router: Router, private weatherService: WeatherService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.worksiteId = id;
        this.worksiteService.getWorksiteById(id).subscribe(worksite => {
          this.worksite = worksite;
          this.initializeMap();
          this.worksiteService.getWorkers(id).subscribe( workers => {
            this.workers = workers.workers;
          });
          this.worksiteService.getReadings(id).subscribe( readings => {
            this.readings = readings;
            console.log("Reading:",readings);
          });
          this.weatherService.getLatestWeatherByWorksiteId(id).subscribe( weather => {
            this.weather = weather;
          });
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

  refreshWeather() {
    if (this.worksiteId) {
      if (!this.isCelsius){
        this.toggleTemperatureUnit();
      }
      this.weatherService.getLatestWeatherByWorksiteId(this.worksiteId).subscribe(
        (weather) => {
          this.weather = weather;
        },
        (error) => {
          console.error("Error fetching weather data", error);
        }
      );
    }
  }

  toggleTemperatureUnit() {
    if (this.weather) {
      if (this.isCelsius) {
        // Convert to Fahrenheit
        this.weather.temp = parseFloat(((this.weather.temp * 9) / 5 + 32).toFixed(2));
        this.weather.temp_max = parseFloat(((this.weather.temp_max * 9) / 5 + 32).toFixed(2));
        this.weather.temp_min = parseFloat(((this.weather.temp_min * 9) / 5 + 32).toFixed(2));
      } else {
        // Convert to Celsius
        this.weather.temp = parseFloat((((this.weather.temp - 32) * 5) / 9).toFixed(2));
        this.weather.temp_max = parseFloat((((this.weather.temp_max - 32) * 5) / 9).toFixed(2));
        this.weather.temp_min = parseFloat((((this.weather.temp_min - 32) * 5) / 9).toFixed(2));
      }
      this.isCelsius = !this.isCelsius; // Toggle the unit
    }
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




  formatTimestamp(timestamp: string): string {
    try {
      const date = new Date(timestamp);

      if (isNaN(date.getTime())) {
        // Handle invalid date strings
        return 'Invalid date';
      }

      // Extract parts of the date
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      // Combine into desired format
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    } catch (error) {
      console.error('Invalid timestamp format:', timestamp);
      return 'Invalid date';
    }
  }





}

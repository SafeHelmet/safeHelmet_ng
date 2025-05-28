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
import { WorkerAttendance } from '../models/worker_attendance';
import { Reading } from '../models/reading';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions } from 'chart.js';
import { Location } from "@angular/common";
import { AttendanceService } from '../services/attendance.service';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { HelmetService } from '../services/helmet.service';


@Component({
  selector: 'app-worksite-detail',
  standalone: true,
  imports: [CommonModule,
     ButtonModule,
      TabsModule,
      TableModule,
      DialogModule,
      InputTextModule,
      RouterLink,
      ChartModule],
  providers: [MessageService],
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
  attendances: WorkerAttendance[] = [];
  formattedStartDate: string | null = null;
  formattedEndDate: string | null = null;
  showWeatherDialog: boolean = false;
  isCelsius: boolean = true;
  basicData: any;
  basicOptions: any;
  lineChartData: ChartData<'line'> | null = null;
  lineChartOptions: ChartOptions = {};

  

  map!: L.Map;
  constructor(private route: ActivatedRoute,
              private messageService: MessageService,
              private worksiteService: WorksiteService, 
              private router: Router, 
              private weatherService: WeatherService,
              private attendanceService: AttendanceService,
              private location: Location) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.worksiteId = id;
        this.worksiteService.getWorksiteById(id).subscribe(worksite => {
          this.worksite = worksite;
          if (this.worksite){
            this.worksite.posture_threshold = (this.worksite.posture_threshold ?? 0)*100;
          }
          this.initializeMap();
          this.worksiteService.getWorkers(id).subscribe( workers => {
            this.workers = workers.workers;
          });
          this.worksiteService.getReadings(id).subscribe( (readings: Reading[]) => {
            this.readings = readings.sort((a, b) => {
              const dateA = new Date(a.read_at!).getTime();
              const dateB = new Date(b.read_at!).getTime();
              return dateB - dateA;
            });
            const anomalies = readings.filter((reading: Reading) => reading.anomaly === true);
            const groupedByDay = this.groupAnomaliesByDay(anomalies);
            this.setupLineChart(groupedByDay);

          });
          this.weatherService.getLatestWeatherByWorksiteId(id).subscribe( weather => {
            this.weather = weather;
          });
           this.attendanceService.getAttendanceByWorksiteId(id).subscribe( (attendances: WorkerAttendance[]) => {
            this.attendances = attendances;
          }); 
        });
      }
    });
  }

  back() {
    //this.router.navigate(['/worksites']);
    this.location.back();
  }

  newWorker() {
    this.router.navigate(['worksite/' + this.worksiteId + '/assign']);
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

  
  newWorkerAttendance(attendance: WorkerAttendance) {
    this.router.navigate(['/attendances/new'], { state: { attendance } });
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

  groupAnomaliesByDay(readings: Reading[]) {
    const grouped: { [key: string]: number } = {};

    readings.forEach(reading => {
      if (reading.read_at) {
        const date = new Date(reading.read_at); // Create a Date object only if read_at exists
        const key = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        grouped[key] = (grouped[key] || 0) + 1;
      } else {
        console.warn("Skipping reading with undefined 'read_at':", reading);
      }
    });

    // Sort by date (earliest to latest)
    return Object.entries(grouped).sort(([a], [b]) => new Date(a.split('/').reverse().join('-')).getTime() - new Date(b.split('/').reverse().join('-')).getTime());
  }



  setupLineChart(groupedData: [string, number][]) {
    const labels = groupedData.map(([month]) => month); // Mesi
    const data = groupedData.map(([, count]) => count); // Conteggi

    this.lineChartData = {
      labels,
      datasets: [
        {
          label: 'Anomalies per Day',
          data,
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        }
      ]
    };

    this.lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Day'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Anomalies Count'
          },
          beginAtZero: true
        }
      }
    };
  }





}

/* this.attendances = [
  {
    id: 1,
    worker_id: 91,
    worksite_id: 81,
    start_at: '2025-02-25T08:00:00Z',
    end_at: '2025-02-25T17:00:00Z',
    helmet_id: 36,
    Worker: {
      id: 101,
      name: 'John',
      surname: 'Travolta',
      fiscal_code: 'JD123456789',
      email: 'john.doe@example.com',
      password: 'password123',
      phone: '123-456-7890',
      active: true,
      created_at: new Date('2025-01-01T10:00:00Z'),
      updated_at: new Date('2025-02-01T10:00:00Z')
    },
    Worksite: {
      id: 81,
      name: 'Downtown Construction Site',
      address: '123 Main St',
      city: 'Metropolis',
      state: 'NY',
      zip_code: '10001',
      latitude: 40.7128,
      longitude: -74.0060,
      start_date_of_work: '2025-01-15',
      end_date_of_work: '2025-12-15',
      created_at: new Date('2025-01-01T10:00:00Z'),
      description: 'A construction site in downtown Metropolis',
      active: true,
      temperature_threshold: 30,
      humidity_threshold: 70,
      brightness_threshold: 2000,
      posture_threshold: 5,
      max_g_threshold: 50
    },
    Helmet: {
      id: 301,
      category_id: 23,
      created_at: '2025-02-20T11:13:49.005533Z',
      Category: {
        id: 23,
        name: 'Safety'
      },
      mac_address: 'mac123456'
    }
  }
]; */

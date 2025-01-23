import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import * as L from 'leaflet';
import { FormsModule } from '@angular/forms';
import 'leaflet-control-geocoder';
import { WorksiteService } from '../services/worksite.service';
import { DatePickerModule } from 'primeng/datepicker'; 

@Component({
  selector: 'app-worksite-new',
  standalone: true,
  imports: [
    ButtonModule, 
    InputTextModule, 
    ReactiveFormsModule, 
    CommonModule, 
    ToastModule,
    FormsModule,
    DatePickerModule
  ],
  providers: [MessageService],
  templateUrl: './worksite-new.component.html',
  styleUrl: './worksite-new.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorksiteNewComponent {
  worksiteForm!: FormGroup;
  map!: L.Map;
  private markers: L.Marker[] = [];
  public latitude: number | null = null;
  public longitude: number | null = null;

  constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService, private worksiteService: WorksiteService) {}

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
    this.initializeMap();
    this.worksiteForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      start_date_of_work: ['', Validators.required],
      end_date_of_work: ['', Validators.required],
      latitude: [0, Validators.required],
      longitude: [0, Validators.required]
    });
  }

  initializeMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const geocoder = (L.Control as any).geocoder({
      defaultMarkGeocode: false
    })
      .on('markgeocode', (e: any) => {
        const latlng = e.geocode.center;

        // Update latitude and longitude
        this.latitude = latlng.lat;
        this.longitude = latlng.lng;

        // Add marker to the map
        const marker = L.marker(latlng).addTo(this.map);
        this.markers.push(marker);

        // Zoom to the selected location
        this.map.setView(latlng, 15);
      })
      .addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.latitude = lat;
      this.longitude = lng;

      this.worksiteForm.patchValue({
        latitude: lat,
        longitude: lng
      });

      // Add new marker
      const marker = L.marker([lat, lng]).addTo(this.map);
      this.markers.push(marker);
    });
  }

  clearMarkers() {
    // Remove all markers from the map
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];

    // Reset latitude and longitude
    this.latitude = null;
    this.longitude = null;

    this.worksiteForm.patchValue({
      latitude: 0,
      longitude: 0
    });
  }

  back() {
    this.router.navigate(['/worksites']);
  }

  addWorksite() {
    this.worksiteForm.markAllAsTouched();
    if (this.worksiteForm.valid) {
      console.log(this.worksiteForm.value);
      const worksiteData = this.worksiteForm.value;
      this.worksiteService.addWorksite(worksiteData).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worksite added successfully!' });
          this.router.navigate(['/worksites']); // Navigate back to the worksite list
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add worksite' });
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields' });
    }
  }

}

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as L from 'leaflet';
import { ConfirmationService, MessageService } from 'primeng/api';
import { WorksiteService } from '../services/worksite.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { Worksite } from '../models/worksite';
import { Location } from "@angular/common";
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-worksite-edit',
  standalone: true,
  imports: [
    ButtonModule, 
    InputTextModule, 
    ReactiveFormsModule, 
    CommonModule, 
    ToastModule,
    FormsModule,
    DatePickerModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './worksite-edit.component.html',
  styleUrl: './worksite-edit.component.css',
  encapsulation: ViewEncapsulation.None
})
export class WorksiteEditComponent {

  worksiteId: string | null = null;
  worksite: Worksite | null = null;
  worksiteForm!: FormGroup;
  workers: Worker[] = [];
  private markers: L.Marker[] = [];
  public latitude: number | null = null;
  public longitude: number | null = null;
  selectedWorksite: Worksite | null = null;
  deleteMessage: string = 'Are you sure you want to delete this worksite?';

  @ViewChild('confirmDialog') confirmDialog: any;

  map!: L.Map;
  constructor(private route: ActivatedRoute,
     private worksiteService: WorksiteService,
      private router: Router, private fb: FormBuilder,
       private messageService: MessageService,
        private location: Location,
        private confirmationService: ConfirmationService
       ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.worksiteId = id;
        this.worksiteService.getWorksiteById(id).subscribe(worksite => {
          this.worksite = worksite;

          if(!this.worksite){
            this.back();
            return;
          }


          this.worksiteForm = this.fb.group({
            name: [this.worksite.name, Validators.required],
            address: [this.worksite.address, Validators.required],
            city: [this.worksite.city, Validators.required],
            state: [this.worksite.state, Validators.required],
            zip_code: [this.worksite.zip_code, Validators.required],
            start_date_of_work: [this.worksite.start_date_of_work, Validators.required],
            end_date_of_work: [this.worksite.end_date_of_work, Validators.required],
            temperature_threshold: [this.worksite.temperature_threshold, Validators.required],
            humidity_threshold: [this.worksite.humidity_threshold, Validators.required],
            brightness_threshold: [this.worksite.brightness_threshold, Validators.required],
            posture_threshold: [this.worksite.posture_threshold, Validators.required],
            max_g_threshold: [this.worksite.max_g_threshold, Validators.required],
            latitude: [this.worksite.latitude, Validators.required],
            longitude: [this.worksite.longitude, Validators.required]
          });

          

          
          
        });
      }
    });
  }

  back() {
    this.location.back();
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

  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this worksite?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onConfirmDelete(); // Call your delete logic here
      },
      reject: () => {
        this.onRejectDelete();
      }
    });
  }


  onConfirmDelete() {
    console.log("sas");
    if (this.worksiteId) {
      this.worksiteService.deleteWorksite(this.worksiteId).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worksite deleted successfully!' });
          this.router.navigate(['/worksites']); 
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete worker' });
        }
      });
    }
  }

  onRejectDelete() {
    this.selectedWorksite = null;
  }

  editWorksite() {
    this.worksiteForm.markAllAsTouched();
    if (this.worksiteForm.valid) {
      if (!this.worksiteId) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Worksite ID is missing.' });
        return;
      }
      const worksiteData = this.worksiteForm.value;
      this.worksiteService.updateWorksite(this.worksiteId, worksiteData).subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Worksite added successfully!' });
          this.router.navigate(['/worksites/'+this.worksiteId]); // Navigate back to the worksite list
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

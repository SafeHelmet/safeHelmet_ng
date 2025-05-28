import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    CarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class HomeComponent {
  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024',
        numVisible: 3
      },
      {
        breakpoint: '768',
        numVisible: 2
      },
      {
        breakpoint: '560',
        numVisible: 1
      }
    ];
  }

  ngOnInit(): void {
    // Load the Model Viewer script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.body.appendChild(script);
  }

  logos = [
    { src: 'assets/images/micropython-logo.svg', alt: 'Logo MicroPython', text: 'Micropython' },
    { src: 'assets/images/go-logo.png', alt: 'Logo Go', text: 'Go' },
    { src: 'assets/images/angular-logo.png', alt: 'Logo Angular', text: 'Angular' },
    { src: 'assets/images/gin-logo.png', alt: 'Logo Gin', text: 'Gin-gonic' },
    { src: 'assets/images/kotlin-logo.png', alt: 'Logo Kotlin', text: 'Kotlin' },
    { src: 'assets/images/postgresql-logo.png', alt: 'Logo PostgreSQL', text: 'PostgreSQL' },
    { src: 'assets/images/ble-logo.webp', alt: 'Logo BLE', text: 'Bluetooth Low Energy' },
    { src: 'assets/images/iot-logo.png', alt: 'Logo IoT', text: 'Internet of Things' }
  ];

  

  // Function to calculate card styles dynamicall


}

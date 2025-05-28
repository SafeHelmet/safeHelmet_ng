import { Component } from '@angular/core';
import { Reading } from '../models/reading';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReadingService } from '../services/reading.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { WorksiteService } from '../services/worksite.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Worksite } from '../models/worksite';
import { Worker } from '../models/worker';
import { Location } from "@angular/common";
import { HelmetService } from '../services/helmet.service';
import { AttendanceService } from '../services/attendance.service';
import { WorkerAttendance } from '../models/worker_attendance';
import { Helmet } from '../models/helmet';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './report-detail.component.html',
  styleUrl: './report-detail.component.css'
})
export class ReportDetailComponent {

  readingId: string | null = null;
  reading: Reading | null = null;
  name: string | null = null;
  surname: string | null = null;
  worksitename: string | null = null;
  worksite: Worksite | null = null;
  worker: Worker | null = null;
  attendance: WorkerAttendance | null = null;
  helmet: Helmet | null = null;




  constructor(private route: ActivatedRoute,
              private readingService: ReadingService,
              private workisteService: WorksiteService ,
              private router: Router,
              private helmetService: HelmetService,
              private attendanceService: AttendanceService,
              private location: Location,) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.readingId = id;
        this.readingService.getReadingsById(id).subscribe(reading => {
          this.reading = reading;
          if (this.reading){
            this.reading.incorrect_posture = (this.reading.incorrect_posture ?? 0) * 100;
          }
          if (this.reading) {
            this.readingService.getReadingWorker(id).subscribe(worker => {
              this.worker = worker;
            });
            this.readingService.getReadingWorkiste(id).subscribe(worksite => {
              this.worksite = worksite;
            });
            if (this.reading.attendance_id) {
              this.attendanceService.getAttendanceById(this.reading.attendance_id.toString()).subscribe(attendance => {
                this.attendance = attendance;
                if (this.attendance?.helmet_id) {
                  this.helmetService.getHelmetById(this.attendance?.helmet_id.toString()).subscribe(helmet => {
                    this.helmet = helmet;
                  });
                }
              });
            }
          }
        });
        
      }
    });
  }

  back() {
    //this.router.navigate(['/readings']);
    this.location.back();
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




  downloadReading() {
    const doc = new jsPDF();

    // Logo settings
    const imageLogo = 'assets/images/bannerLogo.png'; // Path to the logo image
    const logoWidth = 60; // Width of the logo
    const logoHeight = 10; // Height of the logo
    const formattedReadAt = this.reading?.read_at
      ? this.formatTimestamp(this.reading.read_at)
      : 'N/A';




    doc.addImage(imageLogo, 'PNG', 10, 10, logoWidth, logoHeight);

    // Title
    doc.setFontSize(16);
    doc.text('Report Details', 105, 20, { align: 'center' });

    // Data Section
    doc.setFontSize(12);
    doc.text(`Reading ID: ${this.readingId ?? 'N/A'}`, 10, 40);
    doc.text(`Reading Date: ${formattedReadAt}`, 10, 50);
    doc.text(`Worker name: ${this.worker?.name ?? 'N/A'} ${this.worker?.surname ?? 'N/A'}`, 10, 60);
    doc.text(
      `Worksite location: ${this.worksite?.address ?? 'N/A'} ${this.worksite?.city ?? 'N/A'}, ${this.worksite?.state ?? 'N/A'}`,
      10,
      70
    );
    doc.text(`Anomaly: ${this.reading?.anomaly ? 'Detected' : 'Not Detected'}`, 10, 80);


    if (! this.reading ){
      console.log("No reading associate, ERROR");
      return;
    }

    
    const rows = [
      ["Temperature", `${((this.reading?.weather_temperature_min || 0) - (this.worksite?.temperature_threshold || 0)).toFixed(2)} °C | ${this.reading.temperature} °C | ${((this.reading?.weather_temperature_max || 0) + (this.worksite?.temperature_threshold || 0)).toFixed(2) } °C`], 
      ["Humidity", `${this.reading.humidity} % | ${Math.min((this.reading?.weather_humidity || 0) + (this.worksite?.humidity_threshold || 0), 100)} %`], 
      ["Brightness", `${this.reading.brightness} Lux | ${(this.reading?.weather_brightness || 0) + (this.worksite?.brightness_threshold || 0)} Lux `],  
      ["Methane Detected", this.reading.methane ? "Yes" : "No"],
      ["Carbon Monoxide Detected", this.reading.carbon_monoxide ? "Yes" : "No"],
      ["Smoke Detected", this.reading.smoke_detection ? "Yes" : "No"],
      ["Welding Protection", this.reading.uses_welding_protection ? "Active" : "Not plugged in"],
      ["Gas Protection", this.reading.uses_gas_protection ? "Active" : "Not plugged in"],
      ["Incorrect Posture", `${this.reading.incorrect_posture} %`],
      ["Anomaly Detected", this.reading.anomaly ? "Yes" : "No"],
      ["Mean acceleration value X-axis", `${this.reading.avg_X} m/s^2`],
      ["Mean acceleration value Y-axis", `${this.reading.avg_Y} m/s^2`],
      ["Mean acceleration valuen Z-axis", `${this.reading.avg_Z} m/s^2`],
      ["Mean acceleration value magnitude", `${this.reading.avg_G} G`],
      ["Value of acceleration standard deviation X-axis", `${this.reading.std_X} m/s^2`],
      ["Value of acceleration standard deviation Y-axis", `${this.reading.std_Y} m/s^2`],
      ["Value of acceleration standard deviation Z-axis", `${this.reading.std_Z} m/s^2`],
      ["Value of acceleration standard deviation magnitude", `${this.reading.std_G} G`],
      ["Max acceleration magnitude value", `${this.reading.max_G} G`],
    ];

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Helmet Readings", 10, 100);

    // Add Table
    autoTable(doc, {
      head: [["Property", "Value / Threshold"]],
      body: rows,
      startY: 110,
      styles: {
        font: "helvetica",
        fontSize: 12,
        halign: "left",
      },
      columnStyles: {
        0: { fontStyle: "bold" }, 
        1: { fontStyle: "normal" },
      },
    });

    // Open the PDF in a new tab
    const pdfData = doc.output('blob'); // Generate a Blob
    const pdfUrl = URL.createObjectURL(pdfData); // Create an object URL
    window.open(pdfUrl);

    console.log('PDF Generated');
  }


}

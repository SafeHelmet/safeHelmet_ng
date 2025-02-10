import { Component } from '@angular/core';
import { Reading } from '../models/reading';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingService } from '../services/reading.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { WorksiteService } from '../services/worksite.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Worksite } from '../models/worksite';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule],
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




  constructor(private route: ActivatedRoute, private readingService: ReadingService, private workisteService: WorksiteService , private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.readingId = id;
        this.readingService.getReadingsById(id).subscribe(reading => {
          this.reading = reading;
          if (this.reading) {
            this.readingService.getReadingWorker(id).subscribe(worker => {
              this.worker = worker;
            });
            this.readingService.getReadingWorkiste(id).subscribe(worksite => {
              this.worksite = worksite;
            });
          }
        });
        
      }
    });
  }

  back() {
    this.router.navigate(['/readings']);
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
    doc.text(`Reading ID: ${this.readingId ?? 'N/A'}`, 10, 50);
    doc.text(`Reading Date: ${formattedReadAt}`, 10, 60);
    doc.text(`Worker name: ${this.worker?.name ?? 'N/A'}`, 10, 70);
    doc.text(`Worker surname: ${this.worker?.surname ?? 'N/A'}`, 10, 80);
    doc.text(
      `Worksite location: ${this.worksite?.address ?? 'N/A'} ${this.worksite?.city ?? 'N/A'}, ${this.worksite?.state ?? 'N/A'}`,
      10,
      90
    );

    // Instructions for Worksite
    if (this.worksitename) {
      doc.setTextColor(0, 0, 255); // Set text color to blue for clickable text
      doc.textWithLink(
        `Click here for Worksite Details`,
        10,
        100,
        { url: `/worksite/${this.worksitename}` } // Replace with actual worksite link
      );
      doc.setTextColor(0, 0, 0); // Reset text color to black
    }

    if (! this.reading ){
      console.log("No reading associate, ERROR");
      return;
    }

    // Example Table Data
    const rows = [
      ["Temperature", `${this.reading.temperature} °C / ${this.worksite?.temperature_threshold} °C`], 
      ["Humidity", `${this.reading.humidity} % / ${this.worksite?.humidity_threshold} %`],       
      ["Brightness", `${this.reading.brightness} lumen / ${this.worksite?.brightness_threshold} lumen `],  
      ["Methane Detected", this.reading.methane ? "Yes" : "No"],
      ["Carbon Monoxide Detected", this.reading.carbon_monoxide ? "Yes" : "No"],
      ["Smoke Detected", this.reading.smoke_detection ? "Yes" : "No"],
      ["Welding Protection Used", this.reading.uses_welding_protection ? "Yes" : "No"],
      ["Gas Protection Used", this.reading.uses_gas_protection ? "Yes" : "No"],
      ["Incorrect Posture", this.reading.incorrect_posture.toString()],
      ["Anomaly Detected", this.reading.anomaly ? "Yes" : "No"],
    ];

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Helmet Readings", 10, 110);

    // Add Table
    autoTable(doc, {
      head: [["Property", "Value / Threshold"]],
      body: rows,
      startY: 120,
      styles: {
        font: "helvetica",
        fontSize: 12,
        halign: "left",
      },
      columnStyles: {
        0: { fontStyle: "bold" }, // Left column in bold
        1: { fontStyle: "normal" }, // Right column normal
      },
    });

    // Open the PDF in a new tab
    const pdfData = doc.output('blob'); // Generate a Blob
    const pdfUrl = URL.createObjectURL(pdfData); // Create an object URL
    window.open(pdfUrl);

    console.log('PDF Generated');
  }


}

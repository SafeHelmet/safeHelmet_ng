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




  constructor(private route: ActivatedRoute, private readingService: ReadingService, private workisteService: WorksiteService , private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.readingId = id;
        this.readingService.getReadingsById(id).subscribe(reading => {
          this.reading = reading;
          console.log(this.reading?.read_at);
          console.log(typeof this.reading?.read_at);
        });
        if (this.reading){
          //this.workisteService.getWorksiteById(this.reading.)
        }
        
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
    doc.text(`Worker name: ${this.name ?? 'N/A'}`, 10, 70);
    doc.text(`Worker surname: ${this.surname ?? 'N/A'}`, 10, 80);
    doc.text(
      `Worksite Name: ${this.worksitename ?? 'N/A'}`,
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

    // Example Table Data
    const headers = [['Sensor 1', 'Sensor 2', 'Sensor 3']];
    const data = [
      ['Value 1', 'Value 2', 'Value 3'],
      ['Another 1', 'Another 2', 'Another 3'],
    ];

    // Add Table
    autoTable(doc, {
      head: headers,
      body: data,
      startY: 110, // Adjust startY to fit below other content
      styles: { halign: 'center' },
    });

    // Open the PDF in a new tab
    const pdfData = doc.output('blob'); // Generate a Blob
    const pdfUrl = URL.createObjectURL(pdfData); // Create an object URL
    window.open(pdfUrl);

    console.log('PDF Generated');
  }

  ngOnInit() {
    this.name = "Prova nome";
    this.surname = "Prova cognome";
    this.worksitename = "Prova worksitename cliccabile e porta al detail del worksite";
  }

}

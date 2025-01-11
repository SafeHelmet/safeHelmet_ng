import { Component } from '@angular/core';
import { Reading } from '../models/reading';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingService } from '../services/reading.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { WorksiteService } from '../services/worksite.service';

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




  constructor(private route: ActivatedRoute, private readingService: ReadingService, private workisteService: WorksiteService , private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.readingId = id;
        this.readingService.getReadingsById(id).subscribe(reading => {
          this.reading = reading;
        });
        
      }
    });
  }

  back() {
    this.router.navigate(['/readings']);
  }

  downloadReading(){
    console.log("download reading");
    //farai una get ../api/v1/readings/{id}/download e scarica l'allegato
  }

  ngOnInit() {
    this.name = "Prova nome";
    this.surname = "Prova cognome";
    this.worksitename = "Prova worksitename cliccabile e porta al detail del worksite";
  }

}

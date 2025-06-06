import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app.routes';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



interface DayProgress {
  label: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    FormsModule,
    DashboardComponent,
    ChartModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  days: DayProgress[] = [
    { label: 'Mo', completed: true },
    { label: 'Tu', completed: true },
    { label: 'We', completed: true },
    { label: 'Th', completed: true },
    { label: 'Fr', completed: true },
    { label: 'Sa', completed: false },
    { label: 'Su', completed: false }
  ];

  ngOnInit() {}
}

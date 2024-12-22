import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';

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
    RouterOutlet
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

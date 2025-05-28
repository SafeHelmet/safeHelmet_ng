import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Helmet } from '../models/helmet';
import { HelmetService } from '../services/helmet.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-helmet-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './helmet-detail.component.html',
  styleUrl: './helmet-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HelmetDetailComponent {

  helmetId: string | null = null;
  helmet: Helmet | null = null;
  categoryMap: Map<number, string> = new Map();

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private helmetService: HelmetService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.helmetId = id;
        this.helmetService.getHelmetById(id).subscribe(helmet => {
          this.helmet = helmet;

          this.helmetService.getHelmetCategories().subscribe((categories: { id: number; name: string }[]) => {
            this.categoryMap = new Map(
              categories.map((category) => [category.id, category.name])
            );
          });
          
          /* this.workisteService.getWorkerWorksite(id).subscribe(worksites => {
            this.worksites = worksites.worksites;
          }); */
        });

      }
    });
  }

  back() {
    this.router.navigate(['/helmets']);
  }

  edit() {
    this.router.navigate(['/helmet/' + this.helmetId + '/edit']);
  }

  getCategoryName(categoryId: number): string {
    return this.categoryMap.get(categoryId) || 'Unknown';
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum-vitae',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.css',
  providers: [DataService],
})
export class CurriculumVitaeComponent implements OnInit {
  curriculumVitae: any = {
    education: [],
    experiences: [],
    interests: [],
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBasicInfo().subscribe({
      next: (data) => {
        this.curriculumVitae = data.curriculumVitae;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }
}

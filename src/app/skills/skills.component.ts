import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [DataService],
})
export class SkillsComponent implements OnInit {
  allSkills: SkillCategory[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSkills().subscribe({
      next: (data) => {
        this.allSkills = data;
      },
      error: (error) => {
        console.error('Error fetching skills data', error);
      },
    });
  }
}

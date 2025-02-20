import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [DataService],
})
export class AboutComponent implements OnInit {
  aboutMe: any = {
    coreSkills: [],
    tools: [],
    deployment: [],
    description: '',
    imagePath: '',
    additionalInfo: '',
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBasicInfo().subscribe({
      next: (data) => {
        this.aboutMe = data.aboutMe;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }
}

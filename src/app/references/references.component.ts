import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

interface Reference {
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css',
  providers: [DataService],
})
export class ReferencesComponent implements OnInit {
  references: Reference[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getReferences().subscribe({
      next: (data: Reference[]) => {
        this.references = data;
      },
      error: (error) => {
        console.error('Error fetching references data', error);
      },
    });
  }
}

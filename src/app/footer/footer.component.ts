import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [DataService],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  socialLinks: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBasicInfo().subscribe({
      next: (data) => {
        this.socialLinks = data.socialLinks;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

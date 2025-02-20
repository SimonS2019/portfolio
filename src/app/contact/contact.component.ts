import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DataService],
})
export class ContactComponent implements OnInit {
  contactInfo: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBasicInfo().subscribe({
      next: (data) => {
        this.contactInfo = data;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }
}

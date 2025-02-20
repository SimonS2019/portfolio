import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DataService],
})
export class ContactComponent implements OnInit {
  contactInfo: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBasicInfo().subscribe({
      next: (data) => {
        console.log(data);
        this.contactInfo = data.basicInfo;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }
}

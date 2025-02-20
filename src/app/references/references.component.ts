import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  references = [
    {
        name: 'John Doe',
        position: 'Senior Software Engineer at Google',
        quote: 'Simon is a highly skilled developer with a great eye for design and functionality.',
        contact: 'https://www.linkedin.com/in/johndoe'
    },
    {
        name: 'Jane Smith',
        position: 'Project Manager at Microsoft',
        quote: 'Working with Simon was a pleasure. His attention to detail and dedication is remarkable.',
        contact: 'https://www.linkedin.com/in/janesmith'
    },
    {
        name: 'Michael Johnson',
        position: 'CTO at Tech Startup',
        quote: 'Simon consistently delivers high-quality work and innovative solutions.',
        contact: 'https://www.linkedin.com/in/michaeljohnson'
    }
];
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactInfo = {
    email: 'youremail@example.com',
    phone: '+123 456 789',
    location: 'Auckland, New Zealand',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/yourprofile',
      github: 'https://github.com/yourprofile',
      twitter: 'https://twitter.com/yourprofile',
    },
  };
}

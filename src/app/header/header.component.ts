import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarCollapsed = true;

  scrollTo(section: string): void {
      const element = document.getElementById(section);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.isNavbarCollapsed = true; // Collapse navbar after clicking (on mobile)
      }
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  frontEndSkills = [
    { name: 'Angular', level: 90 },
    { name: 'NG Bootstrap', level: 85 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 85 },
  ];

  tools = [
    { name: 'Git', icon: 'bi bi-git' },
    { name: 'GitHub', icon: 'bi bi-github' },
    { name: 'VS Code', icon: 'bi bi-code-slash' },
  ];

  deployment = [
    { name: 'GitHub Pages', icon: 'bi bi-cloud-upload' },
    { name: 'CI/CD pipelines', icon: 'bi bi-gear' },
  ];
}

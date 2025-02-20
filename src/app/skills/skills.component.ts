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
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
  ];

  deployment = [
    { name: 'GitHub Pages', level: 75 },
    { name: 'CI/CD pipelines', level: 70 },
  ];
}

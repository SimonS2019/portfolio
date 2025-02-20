import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with Angular 17 and NG Bootstrap.',
        technologies: ['Angular', 'NG Bootstrap', 'CSS', 'GitHub Pages'],
        image: 'assets/images/portfolio.png',
        demoLink: 'https://your-portfolio-demo-link.com',
        repoLink: 'https://github.com/YourGitHubUsername/portfolio-website'
    },
    {
        title: 'E-Commerce Website',
        description: 'A modern e-commerce platform with secure payments and real-time product search.',
        technologies: ['Angular', 'TypeScript', 'Firebase'],
        image: 'assets/images/ecommerce.png',
        demoLink: 'https://your-ecommerce-demo-link.com',
        repoLink: 'https://github.com/YourGitHubUsername/ecommerce-website'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management app with drag-and-drop features.',
        technologies: ['Angular', 'JavaScript', 'Bootstrap'],
        image: 'assets/images/task-app.png',
        demoLink: 'https://your-task-app-demo-link.com',
        repoLink: 'https://github.com/YourGitHubUsername/task-management-app'
    }
];
}
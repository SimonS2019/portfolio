import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

// Define project tags enum
enum ProjectTag {
  FrontEnd = 'Front-End', // Projects focused on front-end development
  BackEnd = 'Back-End', // Projects focused on back-end development
  FullStack = 'Full-Stack', // Projects involving both front-end and back-end development
  Angular = 'Angular', // Projects using Angular framework
  React = 'React', // Projects using React library
  // Vue = 'Vue', // Projects using Vue.js framework
  Node = 'Node.js', // Projects using Node.js for server-side development
  Express = 'Express', // Projects using Express framework for building APIs
  DotNetCore = '.NET Core', // Projects using .NET Core framework
  Azure = 'Azure', // Projects using Microsoft Azure cloud services
  Docker = 'Docker', // Projects involving Docker for containerization
  Firebase = 'Firebase', // Projects using Firebase platform
  GoogleCloud = 'Google Cloud', // Projects using Google Cloud services
  // K8s = 'Kubernetes', // Projects using Kubernetes for container orchestration
  TypeScript = 'TypeScript', // Projects using TypeScript programming language
  HTML5 = 'HTML5', // Projects using HTML5 for web structure
  CSS3 = 'CSS3', // Projects using CSS3 for styling
  SASS = 'SASS/SCSS', // Projects using SASS/SCSS for advanced styling
  JavaScript = 'JavaScript', // Projects using JavaScript for front-end scripting
  Bootstrap = 'Bootstrap', // Projects using Bootstrap framework for responsive design
  SQL = 'SQL', // Projects using SQL for database management
  MongoDB = 'MongoDB', // Projects using MongoDB for NoSQL database management
  Game = 'Game', // Projects focused on game development
  Sandbox = 'Sandbox', // Projects involving sandbox or open-world features
  WebsiteBuilders = 'Website Builders', // Projects using website builders like Duda, Wix, WordPress
  Other = 'Other', // Projects that do not fall into any of the above categories
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
  downloadLink?: string; // Link to download the application
  duration: string; // e.g., "January 2023 - March 2023"
  features: string[];
  challenges: string[];
  learnings: string[];
  videoLink?: string;
  contribution?: number; // Percentage of your contribution
  role?: string; // Role in the project
  feedback?: string[]; // Feedback received for the project
  type?: string; // Type of project
  awards?: string[]; // Awards received for the project
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [DataService],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  @ViewChild('projectModal') projectModal: any;
  private modalRef: NgbModalRef | null = null;

  constructor(private dataService: DataService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error fetching projects data', error);
      },
    });
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    this.modalRef = this.modalService.open(this.projectModal, { centered: true });
  }
}

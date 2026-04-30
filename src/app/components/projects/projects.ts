import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'EDAP Platform',
      subtitle: 'Enterprise Integration Platform',
      desc: 'External Digital Acceleration Platform enabling scalable development, deployment, and lifecycle support of external partner integrations. Handles high-availability microservices architecture with comprehensive CI/CD automation.',
      tech: ['Java', 'Spring Boot', 'Angular', 'GCP', 'Kubernetes'],
      locked: true,
    },
    {
      title: 'ProAudit',
      subtitle: 'Vehicle Quality Auditing',
      desc: 'Web-based enterprise application for auditing Volkswagen vehicles for quality analysis, defect tracking, and compliance reporting across manufacturing units. Reduced production defects by 25% through TDD practices.',
      tech: ['Angular', 'Spring Boot', 'Kotlin', 'AWS', 'Kafka'],
      locked: true,
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Application',
      desc: 'Feature-rich e-commerce website with secure authentication using Spring Security, JWT, and OAuth2. Implements role-based access control, product management, cart functionality, and order processing.',
      tech: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'JWT'],
      locked: false,
      link: 'https://github.com/sajithssk/full-stack-with-angular-and-spring-boot',
      github: '',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'Feb 2025 – Present',
      title: 'Senior Software Engineer',
      company: 'Ultimate Kronos Group (UKG)',
      location: 'Noida, India',
      points: [
        'Contributing to EDAP, a global engineering platform enabling scalable development and lifecycle support of external partner integrations',
        'Developing full-stack applications using Java, Spring Boot, and Angular with robust REST APIs',
        'Migrated Jenkins-based CI/CD pipelines to GitHub Actions, improving deployment efficiency by 20%',
        'Leveraged AI tools to optimize workflows and developed automation/agent-based solutions',
        'Actively handling production issues, root-cause analysis, and system stability improvements',
      ],
      tech: [
        'Java',
        'Spring Boot',
        'Angular',
        'GitHub Actions',
        'Docker',
        'GCP',
        'Kubernetes',
        'PostgreSQL',
      ],
    },
    {
      date: '2024 – 2025',
      title: 'CI/CD Platform Engineer',
      company: 'Ultimate Kronos Group (UKG)',
      location: 'Noida, India',
      points: [
        'Led migration of legacy deployment workflows from RightScale to GitHub Actions',
        'Designed reusable CI/CD pipelines for automated build, test, and Docker image creation',
        'Built orchestrator-based automation to streamline deployment triggering across services',
        'Developed standardized deployment workflows (SOPs) and reusable templates',
        'Ensured zero downtime during migration and reduced deployment time by 20%',
      ],
      tech: ['GitHub Actions', 'Docker', 'GCP', 'Terraform', 'Ansible'],
    },
    {
      date: 'Aug 2022 – Jan 2025',
      title: 'Software Engineer',
      company: 'Volkswagen Group Digital Solutions',
      location: 'Gurugram, India',
      points: [
        'Developed ProAudit, a web-based enterprise application for vehicle quality auditing and compliance',
        'Built end-to-end full-stack features using Angular and Spring Boot microservices',
        'Followed TDD practices, reducing production defects by 25%',
        'Led migration to Black Duck for vulnerability analysis and DevSecOps practices',
        'Built and maintained CI/CD pipelines using JFrog and AWS',
      ],
      tech: [
        'Java',
        'Spring Boot',
        'Angular',
        'Kotlin',
        'AWS',
        'Kafka',
        'Kubernetes',
        'Black Duck',
      ],
    },
  ];
}

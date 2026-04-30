import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent {
  aiCapabilities = [
    {
      icon: 'brain',
      title: 'LLM & GenAI',
      desc: 'Expert-level prompt engineering for GPT-4, Claude, and Gemini models. Building RAG pipelines and context-aware AI applications with optimized token usage.',
    },
    {
      icon: 'robot',
      title: 'AI Agents',
      desc: 'Designing autonomous AI agents using LangChain and custom orchestration frameworks. Implementing multi-agent systems for workflow automation.',
    },
    {
      icon: 'code',
      title: 'AI-Assisted Development',
      desc: 'Power user of GitHub Copilot, Claude, and OpenAI Codex. Achieving 40%+ productivity gains through AI pair programming and automated code generation.',
    },
    {
      icon: 'language',
      title: 'NLP & Text Processing',
      desc: 'Implementing sentiment analysis, named entity recognition, and text summarization using spaCy, NLTK, and transformer models.',
    },
    {
      icon: 'chart-line',
      title: 'ML Fundamentals',
      desc: 'Supervised and unsupervised learning with Scikit-learn. Feature engineering, model evaluation, and hyperparameter tuning for business use cases.',
    },
    {
      icon: 'plug',
      title: 'AI API Integration',
      desc: 'RESTful integration with OpenAI, Anthropic, and Hugging Face APIs. Building secure, rate-limited, and cost-optimized AI service layers.',
    },
  ];

  aiTools = [
    'OpenAI GPT-4',
    'Claude 3',
    'GitHub Copilot',
    'LangChain',
    'Hugging Face',
    'NumPy & Pandas',
    'Scikit-learn',
    'spaCy',
    'Pinecone',
    'Vector DBs',
  ];

  skillCategories = [
    {
      icon: 'fa-java',
      title: 'Backend Development',
      skills: [
        'Java',
        'Kotlin',
        'Spring Boot',
        'Spring Security',
        'Microservices',
        'JPA/Hibernate',
        'REST APIs',
        'JUnit',
        'TDD',
        'Kafka',
      ],
    },
    {
      icon: 'fa-angular',
      title: 'Frontend Development',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5/CSS3',
        'RxJS',
        'NgRx',
        'Responsive Design',
        'Material UI',
      ],
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud & DevOps',
      skills: [
        'Docker',
        'Kubernetes',
        'GCP',
        'AWS',
        'GitHub Actions',
        'CI/CD',
        'Terraform',
        'Ansible',
        'JFrog',
      ],
    },
    {
      icon: 'fa-database',
      title: 'Database & Storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization'],
    },
    {
      icon: 'fa-sitemap',
      title: 'Architecture & Design',
      skills: [
        'System Design (HLD/LLD)',
        'Distributed Systems',
        'Microservices',
        'Event-Driven',
        'DSA',
        'Design Patterns',
      ],
    },
    {
      icon: 'fa-python',
      title: 'Python & Data',
      skills: ['Python', 'NumPy', 'Pandas', 'Data Analysis', 'Automation', 'Scripting'],
    },
  ];
}

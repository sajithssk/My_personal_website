import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent {
  texts = [
    'Full-Stack Developer',
    'Cloud-Native Engineer',
    'AI Integration Specialist',
    'Microservices Architect',
  ];

  currentIndex = 0;
  key = 0;

  constructor() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.key++;
    }, 3500);
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}

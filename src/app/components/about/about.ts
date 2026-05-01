import { Component, AfterViewInit } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}

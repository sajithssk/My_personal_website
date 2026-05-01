import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';
import { ScrollRouterService } from '../../services/scroll-router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);
  scrollRouter = inject(ScrollRouterService);
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';

  tabs = [
    { path: '/home', label: 'Home', icon: 'fa-home', section: 'home' },
    { path: '/about', label: 'About', icon: 'fa-user', section: 'about' },
    { path: '/experience', label: 'Experience', icon: 'fa-briefcase', section: 'experience' },
    { path: '/skills', label: 'Skills', icon: 'fa-code', section: 'skills' },
    { path: '/projects', label: 'Projects', icon: 'fa-folder-open', section: 'projects' },
    { path: '/education', label: 'Education', icon: 'fa-graduation-cap', section: 'education' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope', section: 'contact' }
  ];

  ngOnInit() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.observeSections();
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(section: string, path: string) {
    this.mobileMenuOpen = false;
    this.activeSection = section;
    this.scrollRouter.scrollToSection(section, path);
  }

  observeSections() {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const tab = this.tabs.find(t => t.section === sectionId);
          if (tab) {
            this.activeSection = sectionId;
            this.scrollRouter.updateRouteFromScroll(tab.path);
          }
        }
      });
    }, observerOptions);

    this.tabs.forEach(tab => {
      const element = document.getElementById(tab.section);
      if (element) {
        observer.observe(element);
      }
    });
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}

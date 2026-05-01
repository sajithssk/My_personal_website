import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollRouterService {
  private router = inject(Router);
  private isScrolling = false;

  constructor() {
    // Handle direct URL access - scroll to section after navigation
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const url = this.router.url.replace('/', '');
      if (url && url !== 'home') {
        setTimeout(() => {
          this.scrollToElement(url, false);
        }, 100);
      }
    });
  }

  scrollToSection(sectionId: string, route: string) {
    this.isScrolling = true;

    // Update URL without navigation (just browser history)
    window.history.pushState({}, '', route);

    this.scrollToElement(sectionId, true);

    // Reset scrolling flag after animation
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  private scrollToElement(sectionId: string, smooth: boolean) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start',
      });
    }
  }

  updateRouteFromScroll(route: string) {
    if (!this.isScrolling) {
      window.history.replaceState({}, '', route);
    }
  }
}

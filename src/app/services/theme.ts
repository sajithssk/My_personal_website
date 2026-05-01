import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>('dark');
  isDark = signal<boolean>(true);

  constructor() {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) this.theme.set(saved);

    effect(() => {
      const current = this.theme();
      const root = document.documentElement;

      if (current === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDark.set(prefersDark);
      } else {
        this.isDark.set(current === 'dark');
      }

      root.classList.remove('theme-dark', 'theme-light');
      if (current !== 'system') {
        root.classList.add(`theme-${current}`);
      }

      localStorage.setItem('theme', current);
    });
  }

  toggle() {
    const current = this.theme();
    if (current === 'dark') this.theme.set('light');
    else if (current === 'light') this.theme.set('system');
    else this.theme.set('dark');
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}

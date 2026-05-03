import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

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
      this.isDark.set(current === 'dark');

      const root = document.documentElement;
      root.classList.remove('theme-dark', 'theme-light');
      root.classList.add(`theme-${current}`);

      localStorage.setItem('theme', current);
    });
  }

  toggle() {
    const current = this.theme();
    this.theme.set(current === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}

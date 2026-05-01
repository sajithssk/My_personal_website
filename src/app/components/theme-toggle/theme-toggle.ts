import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.scss'],
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  get icon() {
    const theme = this.themeService.theme();
    if (theme === 'dark') return 'moon';
    if (theme === 'light') return 'sun';
    return 'desktop';
  }

  get label() {
    const theme = this.themeService.theme();
    if (theme === 'dark') return 'Dark Mode';
    if (theme === 'light') return 'Light Mode';
    return 'System Default';
  }
}

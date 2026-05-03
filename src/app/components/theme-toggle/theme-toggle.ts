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
    return this.themeService.theme() === 'dark' ? 'moon' : 'sun';
  }

  get label() {
    return this.themeService.theme() === 'dark' ? 'Dark Mode' : 'Light Mode';
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';

  toggleTheme(): void {
    const body = document.body;
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';

    body.classList.toggle('dark-theme', this.currentTheme === 'dark');
  }

  get isDarkMode(): boolean {
    return this.currentTheme === 'dark';
  }
}

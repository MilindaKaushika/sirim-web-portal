import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  isDropdownOpen = false;
  constructor(private router: Router,public themeService: ThemeService) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.menuOpen = false;
  }

  onLogout() {
    this.closeDropdown();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}

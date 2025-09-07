import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  isDropdownOpen = false;
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,private router: Router,public themeService: ThemeService) {
    iconRegistry.addSvgIcon(
      'profile',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pro-icon.svg'));
    iconRegistry.addSvgIcon(
      'setting',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/setting.svg'));
    iconRegistry.addSvgIcon(
      'logout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg'));
  }

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

import {Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';
import {ThemeService} from 'src/app/services/theme.service';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthService} from 'src/app/services/auth.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  showLoginButton = false;
  menuOpen = false;
  isDropdownOpen = false;

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, public router: Router, public themeService: ThemeService, private authService: AuthService) {
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
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private setShowLoginButton(url: string): void {
    this.showLoginButton = !this.isLoggedIn && this.isPublicRoute(url);
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      const currentUrl = this.router.url;
      this.setShowLoginButton(currentUrl);
    });

    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setShowLoginButton(event.urlAfterRedirects);
    });
  }

  private isPublicRoute(url: string): boolean {
    const publicRoutes = ['/login', '/create-account', '/user-registration'];
    return publicRoutes.some(route => url.startsWith(route));
  }

}


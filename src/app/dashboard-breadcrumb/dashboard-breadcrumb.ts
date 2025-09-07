import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard-breadcrumb',
  templateUrl: './dashboard-breadcrumb.html',
  styleUrls: ['./dashboard-breadcrumb.css']
})
export class DashboardBreadcrumb implements OnInit {
  menuOpen = false;
  @Output() menuToggled = new EventEmitter<boolean>();
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
    iconRegistry.addSvgIcon(
      'hand',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/hand-icon.svg'));
    iconRegistry.addSvgIcon(
      'right_arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/right-arrow.svg'));
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuToggled.emit(this.menuOpen);
  }
  ngOnInit(): void {
  }

}
